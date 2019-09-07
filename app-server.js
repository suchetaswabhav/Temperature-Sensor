// Server definitions

var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');

var restify = require('restify');
var app = express();
var router = express.Router();
var port = 3003;
app.use(restify.plugins.bodyParser());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }))

app.use(cors());



// -----------------  File Uploader code   -------------------------

var multer = require('multer');
var path = require('path');
var app = express();
var mkdirp = require('mkdirp')
var port = 3003;
var myModuleJSON = require('./server/service/process-Json');


// var fileName;
// specify the folder
app.use(express.static(path.join(__dirname, 'uploads')));
// headers and content type
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


var storage = multer.diskStorage({

    destination: function (req, file, cb) {
        var dir = './uploads/';
        mkdirp(dir, function (err) {
            if (err) {
                console.error(err);
            }
            // move cb to here
            cb(null, dir);
        });
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }

});
var upload = multer({ storage: storage });



app.post("/upload", upload.array("uploads[]", 12), async function (req, res) {

console.log("UPLOAD request = ", req.body)

    fileName = req.files[0].path;

    var lastFive = fileName.substr(fileName.length - 5);

    console.log( lastFive);

    console.log("Filename.extension = lastFive letters = ", lastFive)

    if(lastFive == ".json"){

      var data= await myModuleJSON.defineRoutes(router, fileName).then((data)=>{
        console.log("inside read data = ", data);
        res.send(data)
      } )
     
    console.log("global variable FileName = ", fileName)
    }
       
});


// -----------------  File Uploader code  ends  -------------------------

 app.listen(port, function () {
        console.log("Listening on port %s...", port);
    });


// -----------------  File Uploader code  -------------------------
// -----------------  File Uploader code   -------------------------


