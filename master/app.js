const { default: axios } = require('axios');
const express = require('express');
let app = express();
const routes = require('./routes')
const registry = require('./routes/registery.json')
const PORT = 3000

app.use(express.json())
app.use('/',routes)
//app.use('/peo',routes)



app.listen(PORT, () => {
    console.log("port"+PORT)
})


























































//axios.defaults.headers.common['53394'] = '53394'
// const auth = (req,res,next) => {
//     const url = req.protocol + '://' + req.host + PORT + req.path
//     console.log(url)
//     const authString = Buffer.from(req.headers.authorization,'base64').toString('utf8')
//     const authparts = authString.split(':')
//     const username = authparts[0]
//     const password = authparts[1]
//     console.log(username +'  | '+password)
//     const user = registry.auth.users[username]
//     if(user){
//         if(user.username === username && user.password === password){
//             next()
//         }
//         else{
//             res.send({authenticated : false, path : url , message : 'Authentication unsuccessful : incorrect password'})
//         }
//     }
//     else{
//         res.send({authenticated : false, path : url , message : 'Authentication unsuccessful : username '+username+' username doesnt exists'})
//     }
// }
// app.use(auth)