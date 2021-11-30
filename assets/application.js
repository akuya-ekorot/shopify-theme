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
  var menu = document.getElementsByClassName("mobile-nav-menu");
  menu[0].style.display = "flex";
}

function openNavChildren(event) {
  var a = event.target;
  var id = a.parentElement.parentElement.firstChild.nextSibling.innerText;
//   console.log(id);

  var element = document.getElementById(id);
//   console.log(element);

  if (element.style.display == "flex") {
    element.style.display = "none";
  } else {
    element.style.display = "flex";
  }
}

function minimizeMobileNav() {
  var menu = document.getElementsByClassName("mobile-nav-menu");
  menu[0].style.display = "none";
}