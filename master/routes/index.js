const express = require('express')
const decodee = require("jwt-decode")
//import jwt_decode from "jwt-decode";
const router = express.Router()
const axios = require('axios')

const jwt = require('jsonwebtoken')
const registery = require('./registery.json')
var t = " "
var o = " "
const h = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
const p = "eyJ1c2VyIjp7InVzZXJuYW1lIjoiNTMzOTQiLCJwYXNzd29yZC"
var abc =" "

// router.all('/:apiName/:path/:parameter', (req,res)=>{
//     console.log(req.params.apiName)
//     if(registery.services[req.params.apiName]){
//         axios({
//             method: req.method,
//             url: registery.services[req.params.apiName].url + req.params.path+req.params.parameter,
//             headers: req.headers,
//             data: req.body
//         }).then((response)=>{
//             res.send(response.data)
//         })  
//     }
//     else{
//         res.send("Api doest exist")
//     }
    
// })
// router.use('/peo',(req,res)=>{
    
// // });
// var h1 = " "
//         var p1 = " "
router.all('/:auth/:parameter',function(req,res,next){
        var un = req.params.auth;
    var ab = req.params.parameter
    const sp = ab.split(" ");
    var oo = sp.length;
    console.log(oo)
    var arr=["describe", "what","tell", "is","about","what","are","where","me"]

    for(let i = 0; i<oo;i++){
        for(let j = 0; j<arr.length;j++){
            if(sp[i] === arr[j] ){
                console.log(sp[i])
                sp.splice(i,1)
            }
        }
    }
    console.log(sp)
    abc = sp[0];
    console.log(abc)  
    
        const user = {
            username : un,
            password : 'Ramya@53394'
        }
        
        jwt.sign({user},'secretkey',(error,token)=>{
            o = token
            console.log(token)
            var [header, payload, signature] = token.split(".")
            //res.json({
                var decoded = decodee(token);
                console.log(decoded)
                var res = payload.substring(0, 50);

                console.log(res)
                // console.log(header)
                // console.log(payload)
                // console.log(signature)
                // console.log(h)
                // console.log(p)
                let count = 0;
                if(res !== p){
                    count++
                }
                console.log(count)
                if( count === 1){
                    console.log("if condition *******")
                    res.sendStatus(403)
                }
                else{
                    console.log("else **************")
                    next();                    
                }
            //     token
            // });
        });
    //     //console.log(t)
    //     console.log(h1)
    //     console.log(p1)
    // console.log(req.params.auth)
    
},
function(req,res,next){
    var un = req.params.auth;
    var ab = req.params.parameter
        console.log("hello")
        // const authString = un + ":ramya123"
        // const encodedAuthString= Buffer.from(authString,'utf8').toString('base64')
        // console.log(encodedAuthString)
        
    if(abc == "john adams" || abc == "aames monroe"){
        axios.get('http://localhost:3001/people/'+req.params.parameter).then((response)=>{
            res.send(response.data)
        })  
    }
    else if(abc=="kangaroo" || abc=="turtle"){
        axios.get('http://localhost:3003/animal/'+abc,{
            headers:{
                Auth:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoiNTMzOTQiLCJwYXNzd29yZCI6IlJhbXlhQDUzMzk0In0sImlhdCI6MTYxOTUzOTI4NH0.vHa2WQ_iA8BQCWN48ma7Th5OWv_oCWhuvnOmIxRuy4Q"
            }
        }).then((response)=>{
            res.send(response.data)
        })
    }
    else if(abc=="Indonesia" || abc=="Finland"){
        axios.get('http://localhost:3002/countries/'+abc,{
            headers: { 
                Auth: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoiNTMzOTQiLCJwYXNzd29yZCI6IlJhbXlhQDUzMzk0In0sImlhdCI6MTYxOTUzOTI4NH0.vHa2WQ_iA8BQCWN48ma7Th5OWv_oCWhuvnOmIxRuy4Q"
             }
        }).then((response)=>{
            res.send(response.data)
            //res.data.headers['auth'];
        })
    }
    else{
        res.send("the data you are searching for doesnt exists")
    }
    
       // }})
    
    
})
module.exports = router