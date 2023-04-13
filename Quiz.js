var exp = require("express")
var router = exp();
var bodyparser = require("body-parser")
var mongoose = require("mongoose");

router.use(bodyparser.urlencoded ({extended : true}))

router.get("/",function(req,res){
    res.sendFile(__dirname+'/Quiz.html')
});

router.post("/send", async function(req,res){
  try {
    await mongoose.connect('mongodb://0.0.0.0:27017/ex6-javid-new', { useNewUrlParser: true });
    console.log('Connected to database!');

    const schema = new mongoose.Schema({
      Ques_no : {
        type : Number,
        required : true
      },
      Ans : {
        type : String,
        required : true
      }
    });

    const table = mongoose.model('quiz1', schema);

    const data1 = await table.find({Ques_no : 1});
    const data2 = await table.find({Ques_no : 2});
    const data3 = await table.find({Ques_no : 3});
  

    const formValue1 = req.body.q1;
    const formValue2 = req.body.q2;
    const formValue3 = req.body.q3;
  
    const gotAns1 = data1.find((d) => d.Ans === formValue1);
    const gotAns2 = data2.find((d) => d.Ans === formValue2);
    const gotAns3 = data3.find((d) => d.Ans === formValue3);
  
    // console.log(gotAns1,gotAns2,gotAns3,matchingData4,matchingData5,matchingData6)

    if (gotAns1 && gotAns2 && gotAns3 ) 
    {
      res.send('3 out of 3');
    } 
    else if((gotAns1 && gotAns2 && !gotAns3) || (gotAns1 && !gotAns2 && gotAns3) || (!gotAns1 && gotAns2 && gotAns3) )
    {
      res.send('2 out of 3');
    }
    else if((gotAns1 && gotAns2 && !gotAns3) || (!gotAns1 && gotAns2 && !gotAns3) || (!gotAns1 && !gotAns2 && gotAns3) || (!gotAns1 && !gotAns2 && gotAns3))
    {
      res.send('1 out of 3');
    }
    else
    {
      res.send('All Answers Are correct');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Error connecting to database');
  }
});

router.listen(8070,console.log("Server Listening"));

