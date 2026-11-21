/* =========================================================
   MSG Scroll Snap Carousel — interactions
   Native scroll snap + a thin Vanilla JavaScript layer
   ========================================================= */
(function () {
  "use strict";

  /* ---------- Element references ---------- */
  var root = document.getElementById("carouselRoot");
  var viewport = document.getElementById("carouselViewport");
  var track = document.getElementById("carouselTrack");
  var dotsContainer = document.getElementById("carouselDots");
  var prevButton = document.getElementById("prevButton");
  var nextButton = document.getElementById("nextButton");
  var currentSlide = document.getElementById("currentSlide");
  var navToggle = document.getElementById("navToggle");
  var primaryNav = document.getElementById("primaryNav");

  if (!root || !viewport || !track || !dotsContainer || !prevButton || !nextButton) {
    return;
  }

  var cards = Array.prototype.slice.call(track.querySelectorAll(".card"));
  if (!cards.length) {
    return;
  }

  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  var offsets = [];
  var dots = [];
  var visibility = new Map();
  var activeIndex = 0;
  var scrollFrame = null;
  var resizeFrame = null;
  var momentumFrame = null;
  var momentumVelocity = 0;
  var drag = null;
  var suppressClick = false;

  /* ---------- Geometry helpers ---------- */
  function maxScrollLeft() {
    return Math.max(0, viewport.scrollWidth - viewport.clientWidth);
  }

  function measureOffsets() {
    var viewportLeft = viewport.getBoundingClientRect().left;
    offsets = cards.map(function (card) {
      return card.getBoundingClientRect().left - viewportLeft + viewport.scrollLeft;
    });
  }

  function nearestIndex() {
    var position = viewport.scrollLeft;
    var best = 0;
    var bestDistance = Infinity;

    for (var i = 0; i < offsets.length; i += 1) {
      var distance = Math.abs(offsets[i] - position);
      if (distance < bestDistance) {
        bestDistance = distance;
        best = i;
      }
    }
    return best;
  }

  /* ---------- State synchronization ---------- */
  function setActive(index) {
    if (index < 0 || index >= cards.length) {
      return;
    }

    if (index !== activeIndex || !dots[index].getAttribute("aria-current")) {
      activeIndex = index;
      dots.forEach(function (dot, dotIndex) {
        var isActive = dotIndex === index;
        dot.classList.toggle("is-active", isActive);
        if (isActive) {
          dot.setAttribute("aria-current", "true");
        } else {
          dot.removeAttribute("aria-current");
        }
      });
      if (currentSlide) {
        currentSlide.textContent = String(index + 1).padStart(2, "0");
      }
    }
  }

  function computeActiveIndex() {
    for (var i = 0; i < cards.length; i += 1) {
      if ((visibility.get(cards[i]) || 0) >= 0.55) {
        return i;
      }
    }
    return nearestIndex();
  }

  function updateControls() {
    var position = viewport.scrollLeft;
    var maximum = maxScrollLeft();
    var atStart = position <= 2;
    var atEnd = position >= maximum - 2;

    prevButton.disabled = atStart;
    nextButton.disabled = atEnd;
    root.dataset.state = atStart ? "start" : atEnd ? "end" : "middle";
  }

  function syncState() {
    setActive(computeActiveIndex());
    updateControls();
  }

  /* ---------- Pagination dots ---------- */
  function buildDots() {
    var fragment = document.createDocumentFragment();

    cards.forEach(function (card, index) {
      var dot = document.createElement("button");
      dot.type = "button";
      dot.className = "dot";
      dot.dataset.index = String(index);
      dot.setAttribute("aria-label", "Go to card " + (index + 1) + " of " + cards.length);
      dot.addEventListener("click", function () {
        scrollToIndex(index);
      });
      fragment.appendChild(dot);
      dots.push(dot);
    });

    dotsContainer.appendChild(fragment);
  }

  /* ---------- Scrolling ---------- */
  function scrollToIndex(index) {
    var targetIndex = Math.min(Math.max(index, 0), cards.length - 1);
    var target = Math.min(offsets[targetIndex] || 0, maxScrollLeft());

    if (momentumFrame !== null) {
      cancelAnimationFrame(momentumFrame);
      momentumFrame = null;
      viewport.classList.remove("is-dragging");
    }

    viewport.scrollTo({
      left: Math.max(0, target),
      behavior: reducedMotion.matches ? "auto" : "smooth"
    });
  }

  function step(direction) {
    scrollToIndex(nearestIndex() + direction);
  }

  prevButton.addEventListener("click", function () {
    step(-1);
  });

  nextButton.addEventListener("click", function () {
    step(1);
  });

  /* ---------- IntersectionObserver pagination ---------- */
  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          visibility.set(entry.target, entry.intersectionRatio);
        });
        setActive(computeActiveIndex());
      },
      {
        root: viewport,
        threshold: [0, 0.1, 0.25, 0.5, 0.55, 0.75, 1]
      }
    );
    cards.forEach(function (card) {
      observer.observe(card);
    });
  }

  /* ---------- Scroll / resize listeners ---------- */
  viewport.addEventListener(
    "scroll",
    function () {
      if (scrollFrame !== null) {
        return;
      }
      scrollFrame = window.requestAnimationFrame(function () {
        scrollFrame = null;
        syncState();
      });
    },
    { passive: true }
  );

  window.addEventListener(
    "resize",
    function () {
      if (resizeFrame !== null) {
        return;
      }
      resizeFrame = window.requestAnimationFrame(function () {
        resizeFrame = null;
        measureOffsets();
        syncState();
      });
    },
    { passive: true }
  );

  /* ---------- Mouse drag with momentum ---------- */
  function endMomentum(shouldSnap) {
    if (momentumFrame !== null) {
      cancelAnimationFrame(momentumFrame);
      momentumFrame = null;
    }
    viewport.classList.remove("is-dragging");
    if (shouldSnap && !reducedMotion.matches) {
      scrollToIndex(nearestIndex());
    } else if (shouldSnap) {
      viewport.scrollLeft = offsets[nearestIndex()] || 0;
    }
  }

  function startMomentum(velocity) {
    momentumVelocity = Math.max(-3, Math.min(3, velocity));

    if (reducedMotion.matches || Math.abs(momentumVelocity) < 0.12) {
      endMomentum(true);
      return;
    }

    function frame() {
      viewport.scrollLeft -= momentumVelocity * 16;
      momentumVelocity *= 0.93;

      if (Math.abs(momentumVelocity) > 0.04) {
        momentumFrame = window.requestAnimationFrame(frame);
      } else {
        momentumFrame = null;
        endMomentum(true);
      }
    }

    momentumFrame = window.requestAnimationFrame(frame);
  }

  function onPointerDown(event) {
    if (event.pointerType !== "mouse" || event.button !== 0) {
      return;
    }
    if (event.target.closest("a, button, input, select, textarea, label, [role='button']")) {
      return;
    }

    drag = {
      startX: event.clientX,
      lastX: event.clientX,
      lastTime: performance.now(),
      scroll: viewport.scrollLeft,
      moved: false,
      velocity: 0
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("pointercancel", onMouseUp);
  }

  function onMouseMove(event) {
    if (!drag) {
      return;
    }

    var delta = event.clientX - drag.startX;
    if (!drag.moved && Math.abs(delta) < 5) {
      return;
    }

    if (!drag.moved) {
      drag.moved = true;
      viewport.classList.add("is-dragging");
    }

    event.preventDefault();
    viewport.scrollLeft = drag.scroll - delta;

    var now = performance.now();
    var elapsed = now - drag.lastTime;
    if (elapsed > 0) {
      drag.velocity = (event.clientX - drag.lastX) / elapsed;
    }
    drag.lastX = event.clientX;
    drag.lastTime = now;
  }

  function onMouseUp() {
    if (!drag) {
      return;
    }

    var moved = drag.moved;
    var velocity = drag.velocity;
    drag = null;

    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", onMouseUp);
    document.removeEventListener("pointercancel", onMouseUp);

    if (moved) {
      suppressClick = true;
      window.setTimeout(function () {
        suppressClick = false;
      }, 150);
      startMomentum(velocity);
    } else {
      viewport.classList.remove("is-dragging");
    }
  }

  viewport.addEventListener("pointerdown", onPointerDown);
  viewport.addEventListener("dragstart", function (event) {
    event.preventDefault();
  });
  viewport.addEventListener(
    "click",
    function (event) {
      if (suppressClick) {
        event.preventDefault();
        event.stopPropagation();
        suppressClick = false;
      }
    },
    true
  );
  window.addEventListener("blur", onMouseUp);

  /* ---------- Keyboard navigation ---------- */
  viewport.addEventListener("keydown", function (event) {
    if (event.target.closest("a, button, input, select, textarea, [contenteditable='true']")) {
      return;
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      step(-1);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      step(1);
    } else if (event.key === "Home") {
      event.preventDefault();
      scrollToIndex(0);
    } else if (event.key === "End") {
      event.preventDefault();
      scrollToIndex(cards.length - 1);
    }
  });

  /* ---------- Mobile navigation ---------- */
  if (navToggle && primaryNav) {
    function closeNav() {
      primaryNav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.setAttribute("aria-label", "Open navigation menu");
    }

    navToggle.addEventListener("click", function () {
      var isOpen = primaryNav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
      navToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
    });

    primaryNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeNav);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        closeNav();
      }
    });
  }

  /* ---------- Initialize ---------- */
  buildDots();
  measureOffsets();
  setActive(0);
  syncState();

  window.addEventListener("load", function () {
    measureOffsets();
    syncState();
  });
})();
