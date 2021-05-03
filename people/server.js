const express = require('express')
const jwt = require('jsonwebtoken')
const app = express()
var fs = require('fs'); 
const { request } = require('http');

const PORT=3001

app.get('/people/:parameter',verifytoken,(req,res)=>{
    jwt.verify(req.token,'secretkey',(err,authData)=>{
        if(err){
            //res.sendStatus(403);
            res.send('error');
        }
        else {
            var contents = fs.readFileSync("C:/Users/53394/Desktop/wrk/people/people.json");
            var jsonContent = JSON.parse(contents);
            const inp =req.params.parameter;
            //const sp = inp.split(" ");
            var arr=["john adams","aames monroe","millard fillmore"]
                for(var j=0;j<=arr.length;j++)
                {
                    if(inp == arr[j])
                    {
                        const a = jsonContent[arr[j]];
                        res.send("<h2> Question</h2> &nbsp<h3>"+inp+ "</h3><br><h2>Answer:</h2> <br><p>"+a+"</p>");
                        res.end();
                    }
                }  
        }
    })      
})

app.post('/people/login',(req,res)=>{
    const user = {
        username : '53394',
        password : 'Ramya@53394'
    }
    jwt.sign({user},'secretkey',(error,token)=>{
        res.json({
            token
        });
    });
});

//Authorization: Bearer <access_token>
function verifytoken(req,res,next){
    const bearerHeader = req.headers['authorization']
    if(typeof bearerHeader !== 'undefined'){
        const bearer = bearerHeader.split(' ');
        console.log(bearer)
        const bearerToken = bearer[1];
        console.log(bearerToken)
        req.token = bearerToken;
        next()
    }
    else{
        res.sendStatus(403);
    }
}



app.get('/sample',(req,res,next) =>{
    res.send("sample hello")
})

app.listen(PORT, () => {
    console.log("app runs on 3001")
})