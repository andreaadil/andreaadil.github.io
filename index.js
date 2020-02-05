// RESPONSIVE NAVBAR
function navFunction() {
  var x = document.getElementById("top-menu");
  document.querySelector(".top-nav").classList.toggle("responsive");
}

// BMI CALCULATOR
//set variables
function calculateBMI() {
  var weight = document.querySelector(".weight").value;
  var height = document.querySelector(".height").value;
  var calculatedBmi = bmiCalculator(weight, height);

//categorise BMI
  if (isNaN(calculatedBmi) === true) {
    document.querySelector(".calculator h1").innerText = "Please enter your measurements.";
  } else if (calculatedBmi < 16) {
    changeHeading("severely underweight");
  } else if (calculatedBmi >= 16 && calculatedBmi < 18.5) {
    changeHeading("underweight");
  } else if (calculatedBmi >= 18.5 && calculatedBmi < 25) {
    changeHeading("ideal");
  } else if (calculatedBmi >= 25 && calculatedBmi < 30) {
    changeHeading("overweight");
  } else if (calculatedBmi >= 30) {
    changeHeading("obese");
  } else {
    console.log("error");
  }

// change headings to display BMI and category
  function changeHeading(bmiType) {
    document.querySelector(".calculator h1").innerText = "You BMI is " + calculatedBmi + ". You are " + bmiType + ".";
    document.querySelector(".bmi-button").innerText = "Recalculate BMI";
  }

//calculate BMI
  function bmiCalculator(w, h) {
    var bmi = Math.round(w / (Math.pow((h / 100), 2)));
    return bmi;
  };
};


// MEDITATE TIMER
var paused;
var remainingTime;


//display correct playback options
function playbackIcons() {
  document.querySelector(".pause").classList.add("timer-display");
  document.querySelector(".stop").classList.add("timer-display");
}

//Clear default value and allow user input
function clearValue(column) {
  document.querySelector("." + column + "-col .med-time").removeAttribute("value");
}


//When play button is clicked...
function meditate() {
  var initTime = parseFloat((document.querySelector(".timer .left-col input").value * 60)) + parseFloat(document.querySelector(".timer .right-col input").value);
  var time = initTime - 1;
  var initDisplay = document.querySelector(".add-timer-text");
  var display = initDisplay;

  if (isNaN(initTime) === true) {
    document.querySelector(".leftv").value = "30";
    document.querySelector(".rightv").value = "00";
  } else if (paused === true) {
    startTimer(remainingTime, display);
  } else {
    startTimer(time, display);
  };

  function startTimer(duration, display) {
    var timer = duration;
    var minutes = parseInt(timer / 60, 10);
    var seconds = parseInt(timer % 60, 10);
    var countDown = setInterval(myTimer, 1000);


    // Countdown function
    function myTimer() {
      document.querySelector(".pause").classList.remove("timer-display");
      document.querySelector(".stop").classList.remove("timer-display");
      document.querySelector(".play").classList.add("timer-display");

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.innerText = minutes + ":" + seconds;
      initDisplay.classList.remove("timer-display");
      document.querySelector(".med-form").classList.add("timer-display");
      timer = timer - 1;
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);


      // When pause is clicked...
      document.querySelector(".pause").addEventListener("click", function() {
        remainingTime = timer;
        clearInterval(countDown);
        document.querySelector(".play").classList.remove("timer-display");
        document.querySelector(".pause").classList.add("timer-display");
        document.querySelector(".stop").classList.remove("timer-display");
        paused = true;
      });


      //When stop is clicked...
      document.querySelector(".stop").addEventListener("click", function() {
        stop();
        paused = false;
      });

      // Finish function
      if (timer < 0) {
        clearInterval(countDown);
        playGong();
        stop();

        paused = false;
      }

    };

    function stop() {
      clearInterval(countDown);
      initDisplay.classList.add("timer-display");
      document.querySelector(".med-form").classList.remove("timer-display");

      document.querySelector(".leftv").value = "30";
      document.querySelector(".rightv").value = "00";

      document.querySelector(".play").classList.remove("timer-display");
      document.querySelector(".pause").classList.add("timer-display");
      document.querySelector(".stop").classList.add("timer-display");
    }

    function playGong() {
      var gong = new Audio("sounds/gong.wav");
      gong.play();
    }

  };
};
