// firebase hosting site
//https://homework-7-21c72.firebaseapp.com
 
  var config = {
    apiKey: "AIzaSyA_cwxPZCT-oNGwYxeVVFuqSKX3H-LgGbQ",
    authDomain: "homework-7-21c72.firebaseapp.com",
    databaseURL: "https://homework-7-21c72.firebaseio.com",
    projectId: "homework-7-21c72",
    storageBucket: "homework-7-21c72.appspot.com",
    messagingSenderId: "880133698247"
  };
  firebase.initializeApp(config);

$("#add-train-btn").on("click", function () {
  event.preventDefault();
  firebase.database().ref().push({
        train: $('#train-name-input').val(),
        destination: $('#destination-input').val(),
        frequency: $('#frequency-input').val(),
        time: $('')
        minutes: $('#minutes-away').append()
    });
});

firebase.database().ref().on("child_added", function(snapshot){
    var row = '<tr><td>' + snapshot.val().train + '</td><td>' + snapshot.val().destination + 
                        '</td><td>' + snapshot.val().time + '</td><td>' + snapshot.val().frequency + '</td></tr><hr>';
  $("#train-table tbody").append(row);
});

// use moment.js for time of train
$("#add-train-btn").on("click", function () {
  event.preventDefault();
  var time = moment().format('LT');
  var userTime = $('#time-input').val();
  firebase.database().ref().push({
    
  })
});

// use a calculation to have next arrival and minutes away display correctly
