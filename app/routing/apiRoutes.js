// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on friend data.
// ===============================================================================
var friendData = [];
 friendData = require("../data/friend");

// constructor for user object
function UserObj(a, b, c) 
{   if (!(this instanceof UserObj)) 
     {return new UserObj(a, b, c)};
  this.name = a;
  this.photo = b;
  this.scores = c;
}
// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(friendData);
  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  app.post("/api/survey", function(req, res) {

 
    var candidateIdx = 0; 
    var candidateScore = 50;
    var suckerScore = 0;
    var sucker = new UserObj(req.body.name, req.body.photo, req.body.scores);
    console.log(sucker);
    for (var x = 0; x < 10; x++) {
        suckerScore = suckerScore + Number(sucker.scores[x]);
    }
    console.log(`user(${sucker.name}) = ${suckerScore}`);
    for (var i = 0; i < friendData.length; i++) {
      var fScore = 0;   
      for (var x = 0; x < 10; x++) {
        fScore = fScore + Number(friendData[i].scores[x]);
      }
      console.log(`${friendData[i].name} : ${fScore}`);
      var comp = suckerScore - fScore;
      if (comp < 0) {comp = comp * -1;}
      if (comp < candidateScore) {candidateScore = comp; candidateIdx = i}
    }
    console.log(`matched: ${friendData[candidateIdx].name}`);
    console.log("stringify:" + JSON.stringify(friendData[candidateIdx]));

    var sucker2 = new UserObj(friendData[candidateIdx].name, 
                              friendData[candidateIdx].photo, 
                              friendData[candidateIdx].scores);
    console.log(`matched: ${sucker2.name}`);

    res.json(sucker2);

    friendData.push(sucker);

    // var myJ = JSON.stringify(friendData);
    //   fs.writeFile("friendData.txt", myJ, function(err) {
    //     if (err) {return console.log(err);};

    //    console.log("friends list text file was updated...")

    //   });  // writeFile ends 

  });

  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

  // app.post("/api/clear", function() {
  //   // Empty out the arrays of data
  //   friendData = [];


  //   console.log(friendData);
  // });
};