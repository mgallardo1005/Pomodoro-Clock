$(document).ready(function () {
  

  var sessionTime = parseInt($("#sessionTime").html()); //this reads the numerical value of our session time minutes
  var breakTime = parseInt($("#breakTime").html()); //the numerical value of our break time minutes
  
  $("#startTime").click(function() { //when we click "start"
    $("#startTime").hide(); //hide the start button
    $("#reset").hide(); //hide the reset button
    var countdown = setInterval(timer, 1000); //setInterval sets up delay for each function initiation. 1000 is milliseconds (1 second)
    sessionTime *= 60; 
//    console.log(sessionTime);
    function timer() { 
      sessionTime-=1; //subtract 1 (second) from our time
      if (sessionTime === 0){ //when the time reaches 0
        clearInterval(countdown); //end the setInterval function
        var startBreak = setInterval(breakTimer, 1000); //run the breakTimer function in 1 second
        breakTime *= 60;
      } //close if sessionTime
      
      if (sessionTime % 60 >= 10) { //if the remainder of sessionTime divided by 60 is greater than 10
          $("#time").html(Math.floor(sessionTime/60) + ":" + sessionTime % 60); //set the time display to look like this
          } else { //if it is less than 10
          $("#time").html(Math.floor(sessionTime/60) + ":" + "0" + sessionTime % 60); //set it up like this with a zero in front of the remaining single digit seconds
          }
    
      function breakTimer() { 
      $("#timeType").html("Break Time:"); //change the label of the time
      $("#time").html(breakTime); //time should now be break time value
      breakTime -= 1; //subtract 1 (second) from our break time
      if (breakTime === 0) { //when the time reaches 0

        clearInterval(startBreak); //stop the setInterval function
        
        $("#reset").show(); //show the reset button
      } //close if breakTime
        
        if (breakTime % 60 >= 10) {
          $("#time").html(Math.floor(breakTime/60) + ":" + breakTime % 60);
          } else {
          $("#time").html(Math.floor(breakTime/60) + ":" + "0" + breakTime % 60);
          }
        
        //allow the reset button to stop the timer and put it back to our designated time
  $("#reset").click(function() {
    sessionTime = 25;
    breakTime = 5;
    $("#sessionTime").html(sessionTime);
    $("#breakTime").html(breakTime);
    $("#timeType").html("Session Time:");
    $("#time").html(sessionTime);
    $("#startTime").show();
  })
        
    } //close function breakTimer
    } //close function timer   
  }) //close startTime click
  
  //allow the + to add minutes to our sessionTime
  $("#addToSession").click(function() { 
    sessionTime += 1;
    $("#time").html(sessionTime);
    $("#sessionTime").html(sessionTime);
  })
  
  //allow the - to subtract minutes to our sessionTime
  $("#minusFromSession").click(function() {
    if (sessionTime > 1){
    sessionTime -= 1;
    $("#time").html(sessionTime);
    $("#sessionTime").html(sessionTime);
    }
  })
  
  //allow the + to add minutes to our breakTime
  $("#addToBreak").click(function() {
    breakTime += 1;
    $("#breakTime").html(breakTime);
  })
  
  //allow the - to subtract minutes to our breakTime
  $("#minusFromBreak").click(function() {
    if (breakTime > 1) {
    breakTime -= 1;
    $("#breakTime").html(breakTime);
    }
  })
  
})