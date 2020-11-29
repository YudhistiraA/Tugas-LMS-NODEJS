const express = require("express");
const bodyParser = require("body-parser") ;
const cors = require("cors") ;
const app = express();

// penggunaan body-parser untuk ekstrak data request berformat JSON

app.use(bodyParser.json())
// penggunaan body-parser untuk ekstrak data request dari body
app.use(bodyParser.urlencoded({extended: true}));

// penggunaan cors agar end point dapat diakses oleh cross platform
app.use(cors());

app.get("/volumkubus/:r/", (req,res) => {
    
    
    let r = req.params.r
  
    let f = r*r*r 
    
    let response = {
       
        message: "volume = " + f
    }

   
    res.json(response)

})
app.get("/luaskubus/:r/", (req,res) => {
    
    
    let r = req.params.r
  
    let f = 6*r*r 
    
    let response = {
       
        message: "luas = " + f
    }

   
    res.json(response)

})
app.get("/volumbalok/:p/:l/:t/", (req,res) => {
    
    
    let p = req.params.p
    let l = req.params.l
    let t = req.params.t
  
    let f = p*l*t
    
    let response = {
       
        message: "volume = " + f
    }

   
    res.json(response)

})
app.get("/luasbalok/:p/:l/:t/", (req,res) => {
    
    
    let p = req.params.p
    let l = req.params.l
    let t = req.params.t
  
    let f = p*l*t
    
    let response = {
       
        message: "volume = " + f
    }

   
    res.json(response)

})


app.listen(8080, () => {
    console.log("Server run on port 8080");
})

