// RESPONSIVE NAVBAR
function navFunction() {
  var x = document.getElementById("top-menu");
  document.querySelector(".top-nav").classList.toggle("responsive");
}

// BMI CALCULATOR

function calculateBMI() {
  var weight = document.querySelector(".weight").value;
  var height = document.querySelector(".height").value;
  var calculatedBmi = bmiCalculator(weight, height);

  if (calculatedBmi < 16) {
    var bmiCategory = "severely underweight";
  } else if (calculatedBmi >= 16 && calculatedBmi < 18.5) {
    var bmiCategory = "underweight";
  } else if (calculatedBmi >= 18.5 && calculatedBmi < 25) {
    var bmiCategory = "ideal";
  } else if (calculatedBmi >= 25 && calculatedBmi < 30) {
    var bmiCategory = "overweight";
  } else {
    var bmiCategory = "obese";
  };

  document.querySelector(".calculator h1").innerText = "You BMI is " + calculatedBmi + ". You are " + bmiCategory + ".";
  document.querySelector(".bmi-button").innerText = "Recalculate BMI";

  function bmiCalculator(w, h) {
    var bmi = Math.round(w / (Math.pow((h / 100), 2)));
    return bmi;
  };
};


// MEDITATE TIMER
function meditate() {
  var initTime = (document.querySelector(".timer .left-col input").value * 60) + document.querySelector(".timer .right-col input").value;
  var time = initTime - 1;
  var initDisplay = document.querySelector(".add-timer-text");
  var display = initDisplay;

  startTimer(time, display);

  function startTimer(duration, display) {
  var timer = duration, minutes, seconds;

  var countDown = setInterval(myTimer, 1000);

  function myTimer() {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.innerText = minutes + ":" + seconds ;
    document.querySelector(".med-form").classList.add("timer-display");

    if (--timer < 0) {
      timer = duration;
    }
};
};
};
//
// function reset() {
//   clearInterval(countDown);
//   document.querySelector(".med-form").classList.remove("timer-display");
// };



  // document.querySelector(".add-form").innerHTML = "<form class='bmi-form med-form' method='get'><div class='flex-container'><div class='left-col'><input type='number' name='minutes' placeholder='30' maxlength='2'></div><div class='middle-col'><p>:</p></div><div class='right-col'><input type='number' name='seconds' placeholder='00' maxlength='2'></div></div></form>"
