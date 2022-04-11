/*
Server stuff - SMPT config
*/

const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);





/* Directory API */

const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
var fs = require('fs'),
path = require('path')


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('json spaces', 4)

albums = './gallery';

app.use("/gallery",express.static('gallery'));

function findPictures(filename) {
    let fs = require('fs'),
    path = require('path'),
    image_file_types = [
        '.apng',
        '.avif',
        '.gif',
        '.jpg',
        '.jpeg',
        '.jfif',
        '.pjpe',
        '.pjp',
        '.png',
        '.svg',
        '.webp',
        '.bmp',
        '.ico',
        '.cur',
        '.tif',
        '.tiff'
    ],
    stats = fs.lstatSync(filename),
    info = {
        path: filename.replace('.','https://pixelbear.studio'),
        full: filename.replace('.','https://pixelbear.studio').replace('thumb-',''),
        name: path.basename(filename)
    };
    if (stats.isDirectory() && info.name != 'node_modules') {
        info.type = "directory";
        info.children = fs.readdirSync(filename).map(function(child) {
            return findPictures(filename + '/' + child);
        }).filter(x => x);
        return info
    } else if (stats.isFile()) {
        let type = info.name.match(/\.[0-9a-z]+$/gi)
        if (type !== null && image_file_types.includes(type[0]) && info.name.includes('thumb')){
            info.type = type[0];
            return info
        } 
        else {
            return
        }
    }
    else {
        return
    }
}



app.get('/api/albums', (req, res) => {
  // res.send({ express: 'Hello From Express' });
  res.header("Content-Type",'application/json')
  res.json(findPictures(albums));
});
app.post('/api/world', (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});

app.listen(port, () => console.log(`Listening on port ${port}`));







