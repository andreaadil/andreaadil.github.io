function navFunction() {
  var x = document.getElementById("top-menu");
  document.querySelector(".top-nav").classList.toggle("responsive");
}

//
//
//
// function meditate() {
//
//   // Setting variables
//   var minutes = (document.querySelector(".left-col input").value - 1);
//
// if(document.querySelector(".right-col input").value > 0) {
//     var seconds = (document.querySelector(".right-col input").value);
// } else {
//   var seconds = 59;
// };
//
// // Setting minute to one less
// setTimeout(function() {document.querySelector(".left-col").innerHTML = "<p>" + minutes + "</p>";}, 1000);
//
//
// // Countdown
// setInterval(function() {
//     document.querySelector(".right-col").innerHTML = "<p>" + seconds-- + "</p>"; }, 1000);
// };
//
// setInterval(function() {
//   document.querySelector(".left-col").innerHTML = "<p>" + minutes-- + "</p>"
// }, 60000);
//
// }
// // if seconds = 0
//   // setInterval(function() {
//   //   document.querySelector(".left-col").innerHTML = "<p>" + --minutes + "<p>"; }, 60000);
//   //
//   // }
