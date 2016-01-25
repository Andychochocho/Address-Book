//Business Logic

//Business Logic Globals
var userChoice1 = 'pingpong';
var userChoice2 = 'pong';
var userChoice3 = 'ping';
// Pingpong Function
function pingPong(userNumber){
  if (userNumber % 15 === 0){
    return userChoice1;
  }
  else if (userNumber % 5 === 0) {
    return userChoice2;
  }
  else if (userNumber % 3 === 0) {
    return userChoice3;
  }
  else {
    return userNumber
  }
}
//User Input

//Global USER INPUT
var counter = 1;/*while loop counter*/
var enterNumber = "<li>Please input a number</li>";/*isNaN*/
//Jquery
$(document).ready(function() {
  $("#userEnter").click(function() {
    userNumber = parseInt($("#userNumber").val());
    $(".pingPongList").empty();
    //Check if userNumber is Not a Number
    if (isNaN(userNumber)) {
      $(".pingPongList").append(enterNumber)
    }else {
      //Begin while loop unless Not a Number
      while(counter <= userNumber) {
      var result = pingPong(counter);
        $(".pingPongList").append($("<li>" + result + "</li>"));
        counter +=1;
      }
    }
  });
});
