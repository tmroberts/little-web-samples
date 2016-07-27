

var toggle  = document.querySelector("#toggle");
var content = document.querySelector(".content");

toggle.addEventListener("click", function(evt){
  content.classList.toggle("appear");
  console.log(content.classList);
});
