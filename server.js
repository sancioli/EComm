var application_root = __dirname,
    express = require("express"),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    path = require("path"),
    mongoose = require('mongoose');

var app = express();

// Database
mongoose.connect('mongodb://localhost/ecomm_database');

// Config
app.use(bodyParser.json());
app.use(methodOverride());
//app.use(express.router);
app.use(express.static(application_root, "public"));
//app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));


var Schema = mongoose.Schema;  

var Product = new Schema({  
    title: { type: String, required: true },  
    description: { type: String, required: true },  
    style: { type: String, unique: true },  
    modified: { type: Date, default: Date.now }
});

var ProductModel = mongoose.model('Product', Product);


app.get('/api', function (req, res) {
  res.send('Ecomm API is running');
});

app.get('/api/products', function (req, res){
  return ProductModel.find(function (err, products) {
    if (!err) {
      return res.send(products);
    } else {
      return console.log(err);
    }
  });
});

app.post('/api/products', function (req, res){
  var product;
  console.log("POST: ");
  console.log(req.body);
  product = new ProductModel({
    title: req.body.title,
    description: req.body.description,
    style: req.body.style,
  });
  product.save(function (err) {
    if (!err) {
      return console.log("created");
    } else {
      return console.log(err);
    }
  });
  return res.send(product);
});

// Launch server

app.listen(4242);
