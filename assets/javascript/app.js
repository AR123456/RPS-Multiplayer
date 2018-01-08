//add a turn indicator to the firebase database

//app needs place for both players to enter their name and click start -
// Then display in HTML HI ___! You are Player 1  on next line Its your turn show Player 1 teh fame cos on left with her name at top and the Rock Paper Scissors choices bellow and then a summary of that players wins, losses and ties. Show Player 2,s box on right with that player wins losses and ties at bottom.  Middle box is empty 
// player 2 sees Hi ___1 you are player 2 , then next line Waiting for ____ to chose. at the bottom of the box is player 2's wins ties losses . Middle box is empty 
// chat box is open at the bottom of the play area with an entry screen,send button and a larger box that displays the conversation 
// after player one chooses she sees what she picked but player 2 dosen't, she then gets waiting for __ to choose.  
// player 2 now gets the choices box populated  and its your turn ot choose 
// winner is displayed in middle box, looked like click in middle box started another round
// working chat box
// when player leaves IE browser refreshed sends disconnect message to chat box and clears  data from firebase data base 
// another player can join game and play 




//get page ready 
$(document).ready(function(){
 
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyA1U0WQigUtNoFTGlrKEMJDdGKZOknhB7M",
    authDomain: "multiplayer-rpg.firebaseapp.com",
    databaseURL: "https://multiplayer-rpg.firebaseio.com",
    projectId: "multiplayer-rpg",
    storageBucket: "multiplayer-rpg.appspot.com",
    messagingSenderId: "952963126812"
  };
  firebase.initializeApp(config);

  
  //create the connection to Firebase 
  firebase.database().ref().on('value',function(snapshot){
  
      console.log(snapshot.val());
  
  }) ;
  //variables
    // Get a reference to the database service
    var database = firebase.database();
      //avalible game choices 
      // Creating variables to hold the number of wins, losses, and ties. They start at 0.
    var guess = ["rock","paper","scissors"];
    var name ="";
    var chat ="";
    var wins = 0;
    var losses = 0;
    var ties = 0;
    var turn =1;

    //setting up player object to match the database 
    var Player1 = {
        name: "",
        guess:"",
        wins:0,
        losses:0,
        ties:0,
        chat:""
        }
    var Player2 = {
        name: "",
        guess:"",
        wins:0,
        losses:0,
        ties:0,
        chat:""
        } 
    // initial load starting game , compare value of on click to database to determine if player one or player two 
  // Capture Button Click to add players
  $("#add-player").on("click", function() {
    // get  player for Firebase .
        name = $("#name-input").val().trim();
        console.log(name);

    database.ref().on("value",function(snapshot){
        if (snapshot.child("Player1").exists()){

//  make Player2 this name - send to database 
           database.ref().set({
            name: Player2.name,
  
           })
//write player2 name to html
           $("#playerTwo").html(Player2.name);

//and execute the  playGame function 
            playGame();//play game function 
            
        } else{
           // make this name Player 1 - send to database
           database.ref().set({
            name: Player1.name,
  
           })

           // write it to HTML 
           $("#playerOne").html(Player1.name);

        }


     // Don't refresh the page 
      event.preventDefault();

    });// end of evaluating for player 

    function playGame(){
 
        if (turn = 1) {
        //  For player one just below rock paper scissors show Hi ____name You are player 1 next line its your turn
         // For player 2 show Hi ____name You are player 2 next line waiting for ___ to choose
             // in player1 box area show rock,paper,scissor in HTML as buttons 
             //on click event selects rock , paper or scissor 
             // sends choice to dbB
            // shows choice in player one area
            //shows waiting for ---name of player 2
            // changes player 2 area to its your turn 
            turn++;
             } else {
                // in player1 box area show rock,paper,scissor in HTML as buttons 
                 //on click event selects rock , paper or scissor 
                 // sends choice to dbB
                 // shows choice in player two area
             }
             evaluateWinner();
              //run function to eval winner, 
            }
            
     function evaluateWinner(){
          // This logic determines the outcome of the game (win/loss/tie), and increments the appropriate number
      if ((player2.guess === “rock”) || (player1.guess === “paper”) || (player1.guess === “scissors”)) {

        if ((player1.guess === “rock”) && (player2.guess === “scissors”)) {
          wins++;//player1
          losses++;//player2
          //update DB 
          //update HTML winner, new scores 
        } else if ((player1.guess === “rock”) && (player2.guess === “paper”)) {
          losses++;//player1
          wins++;//player2
              //update DB 
          //update HTML winner, new scores 
        } else if ((player1.guess === “scissors”) && (player2.guess === “rock”)) {
          losses++;//player1
          wins++;//player2
              //update DB 
          //update HTML winner, new scores 
        } else if ((player1.guess === “scissors”) && (player2.guess === “paper”)) {
          wins++;//player1
          losses++;//player2
           //update DB 
          //update HTML winner, new scores 
        } else if ((player1.guess === “paper”) && (player2.guess === “rock”)) {
          wins++;//player1
          losses++;//player2
              //update DB 
          //update HTML winner, new scores 
        } else if ((player1.guess === “paper”) && (player2.guess === “scissors”)) {
          losses++;//player1
          wins++;//player2
              //update DB 
          //update HTML winner, new scores 
        } else if (player1.guess === player2.guess) {
          ties++;//both players 
              //update DB 
          //update HTML winner, new scores 
        }
       turn=1; 
        }   }     
    
   //function to evaluate for winner pass in the guesses as peramitners , get parm from FB
  //need click event for r,p,s button click will be same event for all three speciffiy in the evert 
    //in this click event update firebase database ,change the playerview in HTML 
    //if the game is over
        //end game function call
  
  //events  store them in an object that matches the format of the firebase database 
    //custom functions
      //function is game over
      function gameOver(){
            //a player leave game put disconnect message in chat
           // make remaining player player one
            // if another player joins re start game 
       }; 
        //show final views and what video says to do next
    // chat message functions -add message   


}); //NO CODE BELOW THIS LINE END OF DOCUMENT READY 

