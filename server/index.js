const fs = require("fs");
const md5 = require("md5");
const io = require('socket.io')();
const bodyParser = require('body-parser');

io.set('origins', '*:*');
let database = {};
const users = [];

const pathDatabase = "./database.json";
const pathUsers = "./users.json";
const express = require('express')
const app = express()
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static(path.join(__dirname, "../dist/")));

function initDatabase(){
	database = {
		items: []
	};
}

function init(){

    function startServer(){
      console.log("start server");
      app.listen(5001, function () {
      })
    }
	fs.readFile(pathUsers, (err, data) => {
          console.log("read users....");
          users.push(...JSON.parse(data));
          console.log(users)
    });
    fs.exists(pathDatabase, (exists) => {
      if(exists) {
        fs.readFile(pathDatabase, (err, data) => {
          console.log("read database....");
          database = JSON.parse(data);
          startServer();
        });
      }else{
        console.log("no database found. Start from scratch");
        initDatabase();
        startServer();
      }
    });

}
function save(){
    fs.writeFile(pathDatabase, JSON.stringify(database),
     err => {if(err) throw err});
}

function getUser(username){
  return  users.find(({name}) => name === username)
}
function canRead(user){
  return  user && user.rights.includes("r")
}
function canWrite(user){
  return  user && user.rights.includes("w")
}
function authorized({name, password}, action){
    const user = getUser(name);
    return user && user.password === md5(password) && user.rights.includes(action)
}


app.get('/items', (req, res) => {
    console.log(database);
    res.json(database);
});

app.post('/push-item', (req, res) => {
    const user = req.body.user;
    if(!authorized(req.body.user, "w")) return;
    const item = req.body.item;
    const itemIndex = database.items
        .findIndex(({id}) => id === item.id);
    if(itemIndex < 0){
        database.items.push(item)
    }else{
        database.items[itemIndex]= item;
    }
    save();
});

app.post('clear-database', (req, res) => {
    const user = req.body.user;
    if(!authorized(user, "w")) return;
    initDatabase();
    save();
});

app.post('pop-item', (req, res) => {
    const user = req.body.user;
    if(!authorized(user, "w")) return;
    database.items = database.items
       .filter(item => id !== item.id);
    save();
});

init();
