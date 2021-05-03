const express = require('express')
const app = express()

const PORT=3002
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
app.get('/countries/:parameter',verifytoken,(req,res,next) =>{
    //if(){
        console.log("done")
        var contents = fs.readFileSync("C:/Users/53394/Desktop/wrk/countries/countries.json");
    var jsonContent = JSON.parse(contents);
    const inp1=req.params.parameter;
    console.log("request processesd "+inp1)
    //const sp = inp1.split(" ");
    var arr=["Liechtenstein","Indonesia","Singapore","Qatar","Finland","Ghana","Egypt","Romania"]
        for(var j=0;j<=arr.length;j++)
        {
            if(inp1 == arr[j])
            {
                const a = jsonContent[arr[j]];
                console.log(req.headers)
                //console.log(res.request._header);
                res.send("<h2> Question</h2> &nbsp<h3>"+inp1+ "</h3><br><h2>Answer:</h2> <br><p>"+a+"</p>");
                res.end();
            }
        }
    // }
    // else{
    //     res.send("authentication unsuccessfull in countries microservice ")
    // }
    
})

app.use('/peo',(req,res,next)=>{
    res.send("peo file says hello");
})

app.get('/sam',(req,res,next) =>{
    res.send("sample hello")
})

app.listen(PORT, () => {
    console.log("app runs on 3002")
})