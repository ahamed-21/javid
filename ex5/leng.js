var express = require('express');
const app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));

app.listen(4000,()=> {
    console.log("Listening On Port 4000");
});

app.get("/",(req,res)=>{
    res.sendFile(__dirname+'/javid.html')
});

app.post('/length', async(req, res) => {
    var count = req.body.box.split('').length;
    console.log(count);
    return res.send('Length of word is ' + req.body.box.split('').length);
  })