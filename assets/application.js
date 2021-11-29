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
  menu[0].style.display = "block";
}

function openNavChildren(event) {
  var id = event.target;
  
  var x = String(id.innerHTML);
  console.log(x);
  
  
//   var element = document.getElementById(String(id.innerHTML));
//   console.log(element);
//   document.getElementById(id.innerHTML).style.display = "flex";
}

// document.addEventListener('click', function(e) {
//   e = e || window.event;
//   var target = e.target || e.srcElement,
//       text = target.textContent || target.innerText;   
// }, false);