var tabbutton = document.querySelectorAll(".tab-titles .tab-links");
var tabcont = document.querySelectorAll(".tab-content");

function showpannel(id) {
  tabbutton.forEach(function (node) {
    node.style.backgroundColor = "";
    node.style.color = "";
    node.classList.remove("active-link");
  });
  // tabbutton[id].style.backgroundColor = colorpanel;
  tabbutton[id].style.color = "red";
  tabbutton[id].classList.add("active-link");
  tabcont.forEach(function (node) {
    node.style.display = "none";
  });
  tabcont[id].style.display = "block";
  // tabcont[id].style.backgroundColor = colorpanel;
}
showpannel(0, "red");

var cross = document.querySelector(".hid");

function closemenu() {
  document.querySelector("nav ul").style.right = "-200px";
}

function openmenu() {
  document.querySelector("nav ul").style.right = "0";
}
