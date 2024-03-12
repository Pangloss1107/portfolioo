function toggleMenu() {
    var nav = document.getElementById("main-nav");
    var icon = document.querySelector(".menu-icon");
    if (nav.className === "active") {
      nav.className = "";
      icon.innerHTML = "&#9776;"; // Cambia el ícono a hamburguesa
    } else {
      nav.className = "active";
      icon.innerHTML = "&times;"; // Cambia el ícono a X
    }
  }


// Lazy loading para imágenes
document.addEventListener("DOMContentLoaded", function() {
    var lazyImages = [].slice.call(document.querySelectorAll("img[data-src]"));

    if ("IntersectionObserver" in window) {
      var lazyImageObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            var lazyImage = entry.target;
            lazyImage.src = lazyImage.dataset.src;
            lazyImage.removeAttribute("data-src");
            lazyImageObserver.unobserve(lazyImage);
          }
        });
      });

      lazyImages.forEach(function(lazyImage) {
        lazyImageObserver.observe(lazyImage);
      });
    }
  });

  document.addEventListener("DOMContentLoaded", function() {
    var lazyText = document.getElementById("lazyText");
    lazyText.classList.add("visible");
  });