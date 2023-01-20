const models = [
  { model: "./models/ANIMATION1.gltf", animation: "Animation_Astray_mat" },
  { model: "", animation: "" },
  { model: "", animation: "" },
  { model: "", animation: "" },
  { model: "", animation: "" },
];

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty("--vh", `${vh}px`);


document.getElementById("page-1").style.display = "none";
document.getElementById("page-2").style.display = "none";
document.getElementById("page-3").style.display = "none";
document.getElementById("page-4").style.display = "none";
document.getElementById("page-5").style.display = "none";

const timeout = setTimeout(function () {
  window.location.href = "index.html#page-1";
  document.getElementById("homePage").style.display = "none";
  document.getElementById("page-1").style.display = "flex";
  
  window.clearTimeout(timeout);
}, 2000);

function secondId() {
  window.location.href = "index.html#page-2";
  document.getElementById("page-2").style.display = "flex";
  document.getElementById("page-1").style.display = "none";

}
function thirdId() {
  window.location.href = "index.html#page-3";
  document.getElementById("page-3").style.display = "flex";
  document.getElementById("page-2").style.display = "none";
}
function fourthId() {
  window.location.href = "index.html#page-4";
  document.getElementById("page-4").style.display = "flex";
  document.getElementById("page-3").style.display = "none";
  document.getElementById("page-2").style.display = "none";
  document.getElementById("page-5").style.display = "none";

}
function fifthId(id) {
  window.location.href = "index.html#page-5";
  document.getElementById("page-5").style.display = "flex";
  document.getElementById("page-4").style.display = "none";
  document.getElementById("page-3").style.display = "none";
  changeModel(id);
}
function backToPage2() {
  window.location.href = "index.html#page-1";
  document.getElementById("page-1").style.display = "flex";
  document.getElementById("page-2").style.display = "none";
}
// function backToPage4() {
//   window.location.href = "index.html#page-2";
//   document.getElementById("page-2").classList.remove("hidden");
//   document.getElementById("page-3").classList.add("hidden");

// }
function backToPage3() {
  window.location.href = "index.html#page-2";
  document.getElementById("page-2").style.display = "flex";
  document.getElementById("page-3").style.display = "none";
  document.getElementById("page-4").style.display = "none";

}
function backToPage5() {
  window.location.href = "index.html#page-2";
  document.getElementById("page-2").style.display = "flex";
  document.getElementById("page-5").style.display = "none";
}

function changeModel(name) {
  const modelViewer = document.querySelector("model-viewer");
alert('1111');
  const base = "./models/" + name;
  modelViewer.src = base + ".gltf";
   modelViewer.iosSrc = base + ".usdz";
}
function exit() {
  const _exit = document.querySelector("model-viewer");
  _exit.shadowRoot
    .querySelector(".exit-webxr-ar-button")
    .addEventListener("click", function () {
      backToPage5();
    });
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
