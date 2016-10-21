var express = require('express');
var Item = require('./Item.js').Item;
var app = express();

// Configure jade to be our rendering engine
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

// Enable boostrap from npm as a served static directory
app.use("/libs",express.static('node_modules/bootstrap/dist'));

// Our CSS and JS files
app.use("/public",express.static('public'));

/*

Este código sirve hasta el punto 3, para cargar las imáganes de nuestra tienda.

var pics = [
    new Item("http://static.zara.net/photos///2016/I/0/2/p/8713/350/500/2/w/400/8713350500_2_1_1.jpg?ts=1471885139211", "Cazadora Camuflaje", "59.95"),
    new Item("http://static.zara.net/photos///2016/I/0/2/p/6719/364/600/2/w/400/6719364600_2_3_1.jpg?ts=1473421003944", "Cazadora Acolchada", "49.95"),
    new Item("http://static.zara.net/photos///2016/I/0/2/p/2522/350/800/3/w/400/2522350800_2_2_1.jpg?ts=1473865343739", "Cazadora Motera", "69.95"),
    new Item("http://static.zara.net/photos///2016/I/0/2/p/6719/362/505/2/w/400/6719362505_2_3_1.jpg?ts=1470839724960", "Canguro Acolchado", "19.99"),
    new Item("http://static.zara.net/photos///2016/I/0/2/p/4454/300/407/2/w/400/4454300407_2_1_1.jpg?ts=1468944920643", "Cazadora Denim", "29.95"),
    new Item("http://static.zara.net/photos///2016/I/0/2/p/9953/350/800/2/w/400/9953350800_2_1_1.jpg?ts=1471004363250", "Cazadora Piel", "99.95"),
    new Item("http://static.zara.net/photos///2016/I/0/2/p/1792/380/427/2/w/400/1792380427_2_1_1.jpg?ts=1472053139581", "Camisa Snaps", "39.95"),
    new Item("http://static.zara.net/photos///2016/I/0/2/p/4317/354/505/2/w/400/4317354505_2_1_1.jpg?ts=1469119908084", "Bomber Camuflaje Parche", "49.95"),
    new Item("http://static.zara.net/photos///2016/I/0/2/p/0706/207/400/3/w/200/0706207400_1_1_1.jpg?ts=1474283685412", "Cazadora Bomber", "29.95")
];

*/

// Use 500px API to get random pictures for our products
var API500px = require('500px');
var api500px = new API500px("YecP85RjzG08DN0MqvgFa0N780dNaDmJX6iTPbYp");

api500px.photos.searchByTerm('New York', {'sort': 'created_at', 'rpp': '10','image_size':200},  function(error, results) {
	// Do something
	pics = results.photos.map(function(a){
		// Compose object to be used in show items template
		return new Item(a.image_url);
	});
});

// Render frontpage
app.get('/', function (req, res) {
    res.render('portada',{
        pics: pics
    });
});


// Server start
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
