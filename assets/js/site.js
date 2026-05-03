(function () {
  function currentTimelineFilter() {
    var params = new URLSearchParams(window.location.search);
    var type = (params.get("type") || "all").toLowerCase();
    return ["all", "blog", "podcast", "video"].indexOf(type) === -1 ? "all" : type;
  }

  function applyTimelineFilter() {
    var filter = currentTimelineFilter();
    var tabs = document.querySelectorAll("[data-filter-tab]");
    var items = document.querySelectorAll("[data-content-type]");
    var empty = document.querySelector(".timeline-empty");
    var pagination = document.querySelector(".pagination");
    var visibleCount = 0;

    tabs.forEach(function (tab) {
      var isActive = tab.getAttribute("data-filter-tab") === filter;
      tab.classList.toggle("is-active", isActive);
      if (isActive) {
        tab.setAttribute("aria-current", "page");
      } else {
        tab.removeAttribute("aria-current");
      }
    });

    items.forEach(function (item) {
      var matches = filter === "all" || item.getAttribute("data-content-type") === filter;
      item.hidden = !matches;
      if (matches) {
        visibleCount += 1;
      }
    });

    if (empty) {
      empty.hidden = visibleCount !== 0;
    }

    if (pagination) {
      pagination.hidden = filter !== "all";
    }
  }

  function wireCopyButtons() {
    document.querySelectorAll("[data-copy-value]").forEach(function (button) {
      button.addEventListener("click", function () {
        var original = button.textContent;
        var value = button.getAttribute("data-copy-value");

        if (!navigator.clipboard || !value) {
          return;
        }

        navigator.clipboard.writeText(value).then(function () {
          button.textContent = "Copied";
          window.setTimeout(function () {
            button.textContent = original;
          }, 1800);
        });
      });
    });
  }

  function removeFeedOnlyMedia(excerpt) {
    var media = excerpt.querySelectorAll("img, picture, figure, iframe, video, audio, canvas, script, style, .postYoutube, .postVideoContainer, .postCaption");

    media.forEach(function (node) {
      node.remove();
    });
  }

  function removeEmptyFeedElements(excerpt) {
    var elements = Array.prototype.slice.call(
      excerpt.querySelectorAll("p, div, figure, h1, h2, h3, h4, h5, h6, ul, ol, li, blockquote")
    ).reverse();

    elements.forEach(function (element) {
      if (!element.textContent.trim() && !element.querySelector("svg")) {
        element.remove();
      }
    });
  }

  function collectVisibleTextNodes(root) {
    var nodes = [];
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    var started = false;
    var node;

    while ((node = walker.nextNode())) {
      var value = node.nodeValue.replace(/\s+/g, " ");

      if (!started) {
        value = value.replace(/^\s+/, "");
      }

      if (value.length > 0) {
        started = true;
        node.nodeValue = value;
        nodes.push(node);
      } else {
        node.nodeValue = "";
      }
    }

    return nodes;
  }

  function removeContentAfter(node, root) {
    var current = node;

    while (current && current !== root) {
      while (current.nextSibling) {
        current.parentNode.removeChild(current.nextSibling);
      }

      current = current.parentNode;
    }
  }

  function truncateExcerpt(excerpt, limit) {
    var textNodes = collectVisibleTextNodes(excerpt);
    var count = 0;
    var truncated = false;

    textNodes.some(function (node) {
      var value = node.nodeValue;
      var remaining = limit - count;

      if (value.length <= remaining) {
        count += value.length;
        return false;
      }

      node.nodeValue = value.slice(0, Math.max(0, remaining)).replace(/\s+$/, "");
      removeContentAfter(node, excerpt);
      truncated = true;
      return true;
    });

    return truncated;
  }

  function lastTextContainer(excerpt) {
    var candidates = Array.prototype.slice.call(
      excerpt.querySelectorAll("p, li, blockquote, h1, h2, h3, h4, h5, h6")
    ).filter(function (element) {
      return element.textContent.trim();
    });

    return candidates[candidates.length - 1] || excerpt;
  }

  function appendInlineReadMore(excerpt, href, truncated) {
    var target = lastTextContainer(excerpt);
    var tail = document.createElement("span");
    var link = document.createElement("a");

    tail.className = "timeline-item__excerpt-tail";
    tail.appendChild(document.createTextNode(truncated ? "... " : " "));

    link.className = "read-more read-more--inline";
    link.href = href;
    link.textContent = "Read more";
    tail.appendChild(link);

    target.appendChild(tail);
  }

  function setupFeedExcerpts() {
    document.querySelectorAll("[data-feed-excerpt]").forEach(function (excerpt) {
      var article = excerpt.closest(".timeline-item");
      var readMore = article ? article.querySelector("[data-feed-read-more]") : null;
      var href = readMore ? readMore.getAttribute("href") : "#";
      var limit = parseInt(excerpt.getAttribute("data-limit") || "300", 10);

      removeFeedOnlyMedia(excerpt);
      removeEmptyFeedElements(excerpt);

      var truncated = truncateExcerpt(excerpt, limit);

      removeEmptyFeedElements(excerpt);

      if (readMore) {
        readMore.remove();
      }

      appendInlineReadMore(excerpt, href, truncated);
    });
  }

  setupFeedExcerpts();
  applyTimelineFilter();
  wireCopyButtons();
})();
