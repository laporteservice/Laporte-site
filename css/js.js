document.getElementById("item-1").addEventListener("mouseover", mouseOver1);
document.getElementById("bg-1").addEventListener("mouseover", mouseOver1);
document.getElementById("item-1").addEventListener("mouseout", mouseOut1);
document.getElementById("bg-1").addEventListener("mouseout", mouseOut1);

function mouseOver1() {
  document.getElementById("bg-1").style.backgroundColor = "#5b9bd5 ";
}
function mouseOut1() {
  document.getElementById("bg-1").style.backgroundColor = "transparent";
}

document.getElementById("item-2").addEventListener("mouseover", mouseOver2);
document.getElementById("bg-2").addEventListener("mouseover", mouseOver2);
document.getElementById("item-2").addEventListener("mouseout", mouseOut2);
document.getElementById("bg-2").addEventListener("mouseout", mouseOut2);

function mouseOver2() {
  document.getElementById("bg-2").style.backgroundColor = "#5b9bd5 ";
}
function mouseOut2() {
  document.getElementById("bg-2").style.backgroundColor = "transparent";
}

document.addEventListener("scroll", bringMenu);

 function showIn(){
   document.getElementById("menu-index").style.display="block";
   var classes = document.getElementById("menu-index").className
   document.getElementById("menu-index").className = classes + " anima-down"
 }

 function hideIn(){
  document.getElementById("menu-index").style.display="none";
  var classes = document.getElementById("menu-index").className
   document.getElementById("menu-index").className = classes + " anima-up"
}



function bringMenu() {
  console.log(window.pageYOffset)

  if(window.pageYOffset > 66){
    showIn();
  }else{
    hideIn();
  }

 /* if (document.body.scroll()) {
    document.getElementById("menu-index").style.display = "block";
  }*/
}

/*var lastScrollTop = 0;

window.addEventListener(
  "scroll",
  function () {
    var st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
      document.getElementById("menu-index").style.display = "block";
    } else {
      document.getElementById("menu-index").style.display = "block";
    }
    lastScrollTop = st;
  },
  false
);*/
