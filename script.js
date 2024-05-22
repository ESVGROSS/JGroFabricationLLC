//navbar dropdown function
function myFunction() {
  var dropdownContent = document.querySelector(".dropdown-content");

  // Toggle the display of the dropdown menu
  if (
    dropdownContent.style.display === "none" ||
    dropdownContent.style.display === ""
  ) {
    dropdownContent.style.display = "block";

    // Check if dropdown will exceed the right edge of the viewport
    if (dropdownContent.getBoundingClientRect().right > window.innerWidth) {
      dropdownContent.style.right = "0";
      dropdownContent.style.left = "auto";
    }
  } else {
    dropdownContent.style.display = "none";
  }
}

//bootstrap carousel
var breakpoint = {
  // Small screen / phone
  sm: 576,
  // Medium screen / tablet
  md: 768,
  // Large screen / desktop
  lg: 992,
  // Extra large screen / wide desktop
  xl: 1200,
};

// slick slider
$("#slick").slick({
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnFocus: false,
  draggable: true,
  infinite: true,
  dots: false,
  arrows: false,
  speed: 1000,
  mobileFirst: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: breakpoint.sm,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
      },
    },
    {
      breakpoint: breakpoint.md,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
      },
    },
    {
      breakpoint: breakpoint.lg,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false,
      },
    },
    {
      breakpoint: breakpoint.xl,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
        arrows: false,
      },
    },
  ],
});
// Initialize Slick slider
$("#slick").slick({
  // Slick settings
});

// Handle click event for previous button
$(".slick-prev").click(function () {
  $("#slick").slick("slickPrev");
});

// Handle click event for next button
$(".slick-next").click(function () {
  $("#slick").slick("slickNext");
});

document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide img");

  slides.forEach((slide) => {
    slide.addEventListener("click", function () {
      // Remove expanded class from all slides
      slides.forEach((s) => s.classList.remove("expanded"));

      // Add expanded class to the clicked slide
      this.classList.add("expanded");
    });
  });
});
