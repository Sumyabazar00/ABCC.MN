var del1 = window.document.getElementById("delgerengui");
del1.addEventListener("click", function () {
  del1.style.display = "none";
  var a = document.getElementById("cont");
  a.style.display = "block";
  var b = document.getElementById("huraangui");
  b.style.display = "block";
});
var hur = window.document.getElementById("huraangui");
hur.addEventListener("click", function () {
  var a = document.getElementById("cont");
  a.style.display = "none";
  hur.style.display = "none";
  del1.style.display = "block";
});
var del = window.document.getElementById("delgerengui1");
del.addEventListener("click", function () {
  var a = document.getElementById("cont-1");
  a.style.display = "block";
  del.style.display = "none";
  var b = document.getElementById("huraangui1");
  b.style.display = "block";
});
var hur = window.document.getElementById("huraangui1");
hur.addEventListener("click", function () {
  var a = document.getElementById("cont-1");
  a.style.display = "none";
  hur.style.display = "none";
  del.style.display = "block";
});
