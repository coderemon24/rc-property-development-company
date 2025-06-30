

// Hero animation
gsap.from(".hero-bg h1", {
  y: 50,
  opacity: 0,
  duration: 1,
  delay: 0.2,
});

gsap.from(".hero-bg a", {
  y: 50,
  opacity: 1,
  duration: 1,
  delay: 0.6,
  stagger: 0.2,
});

// Back to top button
const backToTopBtn = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    backToTopBtn.classList.remove("opacity-0", "invisible");
    backToTopBtn.classList.add("opacity-100", "visible");
  } else {
    backToTopBtn.classList.remove("opacity-100", "visible");
    backToTopBtn.classList.add("opacity-0", "invisible");
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

$(document).ready(function () {
  // Mobile Menu
  let menuBtn = $("#menu-btn");
  let navMenu = $("#nav-menu");
  let overlay = $("#overlay");
  let humburger = $("#humburger");
  let close = $("#close");

  menuBtn.on("click", function () {
    humburger.toggleClass("hidden");
    close.toggleClass("hidden");

    if (navMenu.hasClass("w-[0%]")) {
      navMenu.removeClass("w-[0%]").addClass("w-[60%]");
      overlay.removeClass("hidden").addClass("flex");
    } else {
      navMenu.removeClass("w-[60%]").addClass("w-[0%]");
      overlay.removeClass("flex").addClass("hidden");
    }

    if (overlay.hasClass("flex")) {
      overlay.on("click", function () {
        if (!close.hasClass("hidden")) {
          close.toggleClass("hidden");
          humburger.toggleClass("hidden");
        }

        navMenu.removeClass("w-[60%]").addClass("w-[0%]");
        overlay.removeClass("flex").addClass("hidden");
      });
    }
  });

  // slick slider
  $('.news-slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  
  
  $('.project-slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  
  $('.clients-slider').slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  
  // scroll behavior
  $('a[href*="#"]').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 500, 'linear');
  });
  
  
  
});
