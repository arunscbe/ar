const models = [
   {"model":"./models/ANIMATION1.gltf","animation":"Animation_Astray_mat"},
   {"model":"","animation":""},
   {"model":"","animation":""},
   {"model":"","animation":""},
   {"model":"","animation":""}
]

const timeout = setTimeout(function () {
  window.location.href = "index.html#page-1";

  document.getElementById("homePage").classList.add("hidden");

  document.getElementById("page-1").classList.remove("hidden");

  window.clearTimeout(timeout);
}, 2000);

function secondId() {
  window.location.href = "index.html#page-2";
  document.getElementById("page-2").classList.remove("hidden");
  document.getElementById("page-1").classList.add("hidden");
}
function thirdId() {
  window.location.href = "index.html#page-3";
  document.getElementById("page-3").classList.remove("hidden");
  document.getElementById("page-2").classList.add("hidden");
 
}
function fourthId() {
  window.location.href = "index.html#page-4";
  document.getElementById("page-4").classList.remove("hidden");
  document.getElementById("page-3").classList.add("hidden");
  document.getElementById("page-2").classList.add("hidden");
  document.getElementById("page-5").classList.add("hidden");
}
function fifthId() {
  window.location.href = "index.html#page-5";
  document.getElementById("page-5").classList.remove("hidden");
  document.getElementById("page-4").classList.add("hidden");
  document.getElementById("page-3").classList.add("hidden");
  changeModel("ANIMATION1");
 
}
function backToPage2() {
  window.location.href = "index.html#page-1";
  document.getElementById("page-1").classList.remove("hidden");
  document.getElementById("page-2").classList.add("hidden");
}
function backToPage4() {
  window.location.href = "index.html#page-2";
  document.getElementById("page-2").classList.remove("hidden");
  document.getElementById("page-3").classList.add("hidden");
}
function backToPage3() {
  window.location.href = "index.html#page-2";
  document.getElementById("page-2").classList.remove("hidden");
  document.getElementById("page-4").classList.add("hidden");
  document.getElementById("page-3").classList.add("hidden");
}
function backToPage5() {
  window.location.href = "index.html#page-2";
  document.getElementById("page-2").classList.remove("hidden");
  document.getElementById("page-5").classList.add("hidden");
}

function changeModel(name){
    const modelViewer = document.querySelector("model-viewer");

    const base = "./models/" + name;
    modelViewer.src = base + '.gltf';
 
}
function exit(){
const _exit = document.querySelector("model-viewer");
_exit.shadowRoot.querySelector('.exit-webxr-ar-button').addEventListener('click',function(){
  alert('hello....');
    backToPage5();
})
}
// function playAnimation(){
//   if (Cigar.paused) {
//       Cigar.play();
//       document.getElementById('hotspotButton').innerHTML = 'STOP'
//   } else {
//       Cigar.pause();
//       document.getElementById('hotspotButton').innerHTML = 'PLAY'
//   }
// }
