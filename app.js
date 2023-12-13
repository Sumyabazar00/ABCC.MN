window.document.querySelector(".eb-1 p").addEventListener("click", function () {
  document.getElementById("exit-button-1").style.visibility = "visible";
  var submainDom = window.document.querySelector(".eb-1");
  submainDom.style.width = "1500px";
  submainDom.style.height = "1000px";
  document.getElementById("school-1").style.fontSize = "25px";
  document.getElementById("school-1").style.textAlign = "left";
  document.getElementById("school-1").style.margin = "15px";
  //   document.getElementById("school-1").style.display = "inline";

  window.document.getElementById("p1").innerHTML =
    "<h1>Ажлийн байранд суурилсан сургалтын хөтөлбөрт хамрагдсан хөтөлбөрүүд</h1><br><br><h4><span>&#183;</span>&nbsp&nbspГадаад хэлний орчуулга</h4><h4><span>&#183;</span>&nbsp&nbspСэтгүүл зүй<h4><span>&#183;</span>&nbsp&nbspБагш гадаад хэлний боловсрол/Англи хэл</h4></h4><h4><span>&#183;</span>&nbsp&nbspБагш сургуулийн өмнөх насны боловсрол</h4><h4><span>&#183;</span>&nbsp&nbspОлон улсын харилцаа</h4><h4><span>&#183;</span>&nbsp&nbspАгаарын тээврийн үйлчилгээ/онгоцны үйлчлэгч</h4><h4><span>&#183;</span>&nbsp&nbspСэтгэл судлал</h4><h4><span>&#183;</span>&nbsp&nbspГадаад хэлний орчуулга/Хятад хэл</h4><h4><span>&#183;</span>&nbsp&nbspНийгмийн ажил</h4><h4><span>&#183;</span>&nbsp&nbspБагш, Монгол хэл уран зохиолын боловсрол</h4>";
});
window.document.querySelector(".eb-1 i").addEventListener("click", function () {
  document.getElementById("exit-button-1").style.visibility = "hidden";
  var submainDom = document.querySelector(".eb-1");
  submainDom.style.width = "350px";
  submainDom.style.height = "auto";
  document.getElementById("school-1").style.fontSize = "30px";
  document.getElementById("school-1").style.textAlign = "center";
  document.getElementById("school-1").style.marginTop = "25px";
  document.getElementById("school-1").style = "!important";
  window.document.getElementById("p1").innerHTML = "";
  // window.document.getElementById("p1").style.display = "none";
});
window.document.querySelector(".eb-2 p").addEventListener("click", function () {
  // alert("amer");
  document.getElementById("exit-button-2").style.visibility = "visible";
  var submainDom = document.querySelector(".eb-2");
  submainDom.style.width = "1500px";
  submainDom.style.height = "1000px";
  document.getElementById("school-2").style.fontSize = "25px";
  document.getElementById("school-2").style.textAlign = "left";
  document.getElementById("school-2").style.margin = "15px";
  window.document.getElementById("p2").innerHTML =
    "<h1>Ажлийн байранд суурилсан сургалтын хөтөлбөрт хамрагдсан хөтөлбөрүүд</h1><br><br><h4><span>&#183;</span>&nbsp&nbspБизнесийн удирдлага</h4><h4><span>&#183;</span>&nbsp&nbspНягтлан бодох бүртгэл<h4><span>&#183;</span>&nbsp&nbspСанхүү</h4></h4><h4><span>&#183;</span>&nbsp&nbspАялал жуулчлалын менежмент</h4><h4><span>&#183;</span>&nbsp&nbspПрограмм хангамж</h4><h4><span>&#183;</span>&nbsp&nbspБанк</h4>";
});
window.document.querySelector(".eb-2 i").addEventListener("click", function () {
  document.getElementById("exit-button-2").style.visibility = "hidden";
  var submainDom = document.querySelector(".eb-2");
  submainDom.style.width = "350px";
  submainDom.style.height = "auto";
  document.getElementById("school-2").style.fontSize = "30px";
  document.getElementById("school-2").style.textAlign = "center";
  document.getElementById("school-2").style.marginTop = "25px";
  document.getElementById("school-2").style = "!important";
  window.document.getElementById("p2").innerHTML = "";
  // alert("sdfsdf");
});
window.document.querySelector(".eb-3 p").addEventListener("click", function () {
  // alert("amer");
  document.getElementById("exit-button-3").style.visibility = "visible";
  var submainDom = document.querySelector(".eb-3");
  submainDom.style.width = "1500px";
  submainDom.style.height = "1000px";
  document.getElementById("school-3").style.fontSize = "25px";
  document.getElementById("school-3").style.textAlign = "left";
  document.getElementById("school-3").style.margin = "15px";
  window.document.getElementById("p3").innerHTML =
    "<h1>Ажлийн байранд суурилсан сургалтын хөтөлбөрт хамрагдсан хөтөлбөрүүд</h1><br><br><h4><span>&#183;</span>&nbsp&nbspЭрх зүй</h4>";
});
window.document.querySelector(".eb-3 i").addEventListener("click", function () {
  //   alert("afs");
  document.getElementById("exit-button-3").style.visibility = "hidden";
  var ebDom = document.querySelector(".eb-3");
  ebDom.style.width = "350px";
  ebDom.style.height = "auto";
  document.getElementById("school-3").style.fontSize = "30px";
  document.getElementById("school-3").style.textAlign = "center";
  document.getElementById("school-3").style.marginTop = "25px";
  document.getElementById("school-3").style = "!important";
  window.document.getElementById("p3").innerHTML = "";
});
