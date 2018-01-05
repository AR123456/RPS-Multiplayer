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
 
  //events
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


}); //NO CODE BELOW THIS LINE

