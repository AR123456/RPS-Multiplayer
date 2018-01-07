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
    var guess = ["rock","paper","scissors"];
    var name ="";
    var message ="";
    var wins = 0;
    var losses = 0;
    var ties = 0;
    //settting up player object to match the database 
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
        gameAction:"",
        wins:0,
        losses:0,
        ties:0,
        chat:""
        } 
    
    //so far this is not working 
            // var chats = database.ref('chat');

            //       // On-click function for submitting a chat.
            //       $('#chat').on('click', function () {
            //         var message = $('#message');
            //         var chatObj = {
            //             message: message.val(),
            //             timestamp: firebase.database.ServerValue.TIMESTAMP,
            //             sender: player.name
            //         };
            //         chat.push(chatObj);

            //         // Clear message input.
            //         message.val('');

            //         return false;
            //     });

            //     // Database listening function for chats.
            //     chats.on('child_added', function (snapshot) {
            //         if (snapshot.val()) {
            //             DOMFunctions.showChats(snapshot);
            //         }
            //     });


    

   // Creating variables to hold the number of wins, losses, and ties. They start at 0.
 
  //events  store them in an object that matches the format of the firebase database 
    //need click event for r,p,s button click will be same event for all three speciffiy in the evert 
    //in this click event update firebase database ,change the playerview in HTML 
    //if the game is over
      //run function to eval winner, 
      //end game function call

  //custom functions
      //function is game over
      //function to evaluate for winner pass in the guesses as peramitners , get parm from FB

      //funciton end game
        //show final views and what video says to do next
    // chat message functions -add message   


}); //NO CODE BELOW THIS LINE END OF DOCUMENT READY 

