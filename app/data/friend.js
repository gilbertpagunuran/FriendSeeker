
// var fs = require("fs");

var friendArray = [
{"name":"Ahmed",
"photo":"http://sarcasmlol.com/wp-content/uploads/2016/11/hilarious-profile-pic-2.jpg",
"scores":["5","1","4","4","5","1","2","5","4","1"]},
{"name":"Bjork",
"photo":"http://cdn.pitchfork.com/news/66923/Bjo%CC%88rk_Photo%20by%20Santiago%20Felipe:Getty%20Images_543424784_News_HED.jpg",
"scores":["1","1","1","1","1","1","1","1","1","1"]},
{"name":"Cathy",
"photo":"http://1.media.collegehumor.cvcdn.com/88/29/d6e450c1225210bbb6bc8fb4e874b875.jpg",
"scores":["2","2","2","2","2","2","2","2","2","2"]},
{"name":"Carl",
"photo":"https://s-media-cache-ak0.pinimg.com/564x/ab/65/cf/ab65cfa05b9620d4f08a94810553d837.jpg",
"scores":["2","2","2","2","3","3","3","3","3","3"]},
{"name":"Nicholas",
"photo":"https://s-media-cache-ak0.pinimg.com/236x/eb/b4/f5/ebb4f534a631192e7937d6b088c1bb09.jpg",
"scores":["1","1","2","2","2","2","4","4","4","4"]},
{"name":"Mark",
"photo":"http://worldwideinterweb.com/images/blogphotos/Ok%20Cupid%20Fails/ok%20cupid%20wtf%20enemy.jpg",
"scores":["1","2","3","4","5","2","2","2","2","2"]},
{"name":"David",
"photo":"https://s-media-cache-ak0.pinimg.com/736x/a5/00/0d/a5000dbb0ac76296a732db18898b045d.jpg",
"scores":["1","5","5","5","5","2","1","1","1","1"]},
{"name":"Jesus",
"photo":"https://iprobablywontlikeyou.files.wordpress.com/2012/08/4.jpg",
"scores":["5","5","2","2","5","5","5","2","2","2"]},
{"name":"Superman",
"photo":"http://www.thejay.com/wp-content/superman.jpg",
"scores":["5","5","5","5","5","5","5","5","5","5"]}
];

// fs.readFile("friendData.txt", "utf8", function(err, data){

//     friendArray = JSON.parse(data);
//    //friendArray = data;
// });


// Note how we export the array. This makes it accessible to other files using require.
 module.exports = friendArray;