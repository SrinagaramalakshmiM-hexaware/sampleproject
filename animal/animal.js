const { response } = require('express');
const express = require('express')
const axios = require('axios')
const app = express()
const HOST = 'localhost'
const PORT=3003
var fs = require('fs'); 
var t = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoiNTMzOTQiLCJwYXNzd29yZCI6IlJhbXlhQDUzMzk0In0sImlhdCI6MTYxOTUzOTI4NH0.vHa2WQ_iA8BQCWN48ma7Th5OWv_oCWhuvnOmIxRuy4Q"
//app.use('/countries/:parameters',Headers:)
function verifytoken(req,res,next){
    if(req.headers.auth == t){
        next()
    }
    else{
        res.send("unauthorized")
        //res.sendStatus(403);
        console.log("auth unsuccessfull in microservice");
    }
}

app.get('/animal/:parameter',verifytoken,function(req,res,next) {
    var contents = fs.readFileSync("C:/Users/53394/Desktop/wrk/animal/animal.json");
    var jsonContent = JSON.parse(contents);
    const inp2 = req.params.parameter
    //const sp = inp2.split(" ");
    //res.writeHead(200,"head")
    var count = 0;
    var arr=["leopard","kangaroo","penguin","elephant","otter","beetle","turtle","Romania"]; 
        for(var j=0;j<=arr.length;j++)
        {
            if(inp2 == arr[j])
            {
                const a = jsonContent[arr[j]];
                count ++;
                res.send("<h2> Question</h2> &nbsp<h3>"+inp2+ "</h3><br><h2>Answer:</h2> <br><p>"+a+"</p>");
                res.end();
            }
        }
   // }
})

app.listen(PORT, () => {
    
    
    console.log("app runs on 3003")
})