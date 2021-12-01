function currentDiv(n) {
  showDivs((slideIndex = n));
}

function showDivs(n) {
  const x = document.getElementsByClassName("product-featured-image");

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
  menu[0].style.display = "none";

  if (menu[0].style.display == "none") {
    menu[0].style.display = "flex";
  } else {
    console.log("it clicks like the Khoisan");
    menu[0].style.display = "none";
  } 
}

function openNavChildren(event) {
  var a = event.target;
//   console.log(a);
  var id = a.parentElement.parentElement.firstChild.nextSibling.innerText;
//   console.log(id);

//   console.log(id.split(" "));


  var str = id;

  console.log(
    str.split(' ')
    .map(w => w[0].toUpperCase() + w.substr(1).toLowerCase())
    .join(' ')

  );

  var element = document.getElementById(str);
//   console.log("it clicks like the Khoisan");

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