var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require('mongoose');

var app = express();
app.use(bodyParser.json());

// Create link to Angular build directory
var distDir = __dirname + "/dist/";
app.use(express.static(distDir));
mongoose.connect(process.env.MONGODB_URI);

//Corss validation =============================================================
app.use(function(req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
	res.setHeader('Access-Control-Allow-Credentials', true);
	next();
});

//Model ========================================================================
var cvSchema = mongoose.Schema({
  id: String,
  name: String
}, { collection: 'dml' });

var CV = mongoose.model('CV', cvSchema);

//API ==========================================================================
app.get("/cv/:id", function(req, res) {
  CV.findOne({ id: req.params.id }, function(error, cv) {
		if (error) return handleError(error);
    if (!cv) return res.status(404).send('Invalid name');
    res.send({ cv: cv });
  });
});


app.listen(process.env.PORT || 8080);
