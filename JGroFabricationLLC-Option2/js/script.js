function myFunction() {
    var dropdownContent = document.getElementById("dropdown-content");

    // Toggle the display of the dropdown menu
    if (dropdownContent.style.display === "none" || dropdownContent.style.display === "") {
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

// Automatically close the dropdown menu when an item is clicked
document.querySelectorAll('#dropdown-content ul li a').forEach(item => {
    item.addEventListener('click', function() {
        document.getElementById("dropdown-content").style.display = "none";
    });
});

// Function to toggle the 'See More' section
function seeMore() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "See more";
        moreText.style.display = "none";
        sessionStorage.setItem('galleryExpanded', 'false'); // Update sessionStorage
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "See less";
        moreText.style.display = "inline";
        sessionStorage.setItem('galleryExpanded', 'true'); // Update sessionStorage
    }
}

// Function to reset the gallery state on page load
function resetGalleryState() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    // Check sessionStorage for the gallery state
    var isExpanded = sessionStorage.getItem('galleryExpanded');

    // Set initial state based on sessionStorage
    if (isExpanded === 'true') {
        dots.style.display = "none";
        btnText.innerHTML = "See less";
        moreText.style.display = "inline";
    } else {
        dots.style.display = "inline";
        btnText.innerHTML = "See more";
        moreText.style.display = "none";
    }
}

// Event listener to call resetGalleryState on page load
document.addEventListener('DOMContentLoaded', resetGalleryState);

// Event listener to reset the gallery state when navigating away from the page
window.addEventListener('beforeunload', function() {
    sessionStorage.removeItem('galleryExpanded'); // Remove sessionStorage on page unload
});


// Function to open the lightbox and display the clicked image
function openLightbox(image) {
    var lightbox = document.getElementById("lightbox");
    var expandedImg = document.getElementById("expandedImg");
    var captionText = document.getElementById("caption");

    lightbox.style.display = "flex";
    expandedImg.src = image.src;
    captionText.innerHTML = image.alt; // Use alt text for caption, can be customized
}

// Function to close the lightbox
function closeLightbox() {
    var lightbox = document.getElementById("lightbox");
    lightbox.style.display = "none";
}

// Event listener to close lightbox when clicking outside the image
document.getElementById("lightbox").addEventListener("click", function(event) {
    if (event.target === this) {
        closeLightbox();
    }
});

// Event listener to close lightbox with escape key
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        closeLightbox();
    }
});

// Attach click event to all gallery images
document.querySelectorAll("#gallery img, #more img").forEach(img => {
    img.addEventListener("click", function() {
        openLightbox(this);
    });
});
