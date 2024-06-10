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