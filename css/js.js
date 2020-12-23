

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
