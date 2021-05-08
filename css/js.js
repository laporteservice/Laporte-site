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
var menuindex = document.getElementById("menu-index")
var state = "";
 function showIn(){
   menuindex.style.display="block";
   menuindex.classList.remove("anima-up")
   var classes = menuindex.className
   menuindex.className = classes + " anima-down"
  state = "apareceu"
  
 }

 function hideIn(){     
   setTimeout(function(){menuindex.style.display="none";},500)  
  menuindex.classList.remove("anima-down")
  menuindex.classList.add("anima-up")
  console.log(menuindex.classList)
  state=""; 
}



function bringMenu() {
 
  if(window.pageYOffset > 66){
    showIn();
  }else if(window.pageYOffset<66 & state==="apareceu"){
    hideIn();
  }
}

 /* if (document.body.scroll()) {
    document.getElementById("menu-index").style.display = "block";
  }*/


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
