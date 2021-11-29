function currentDiv(n) {
  showDivs((slideIndex = n));
}

function showDivs(n) {
  const x = document.getElementsByClassName("product-featured-image"); //get array of all featured images

  if (n > x.length) {
    slideIndex = 1;
  } else if (n < 1) {
    slideIndex = x.length;
  }

  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }

  x[slideIndex].style.display = "block";
}


function openMobileNav() {
  var menu = document.getElementByClassName("mobile-nav-menu");

  menu.style.display = "block";
  
}