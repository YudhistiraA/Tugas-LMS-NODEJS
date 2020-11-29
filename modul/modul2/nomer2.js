const express = require("express");
const bodyParser = require("body-parser") ;
const cors = require("cors") ;
const app = express();

// penggunaan body-parser untuk ekstrak data request berformat JSON

app.use(bodyParser.json())
// penggunaan body-parser untuk ekstrak data request dari body
app.use(bodyParser.urlencoded({extended: true}));

app.use(cors());

app.get("/celcius/:r/", (req,res) => {
    
    
    let r = req.params.r
  
    let f = 4/5*r;
    let g = (9/5*r)+32;
    let h = r+273;


    let response = {
       
        message: "reamur = " + f +
                  "farenheit = " + g+
                  "kelvin = " + h
                 

    }

   
    res.json(response)
 
})

app.get("/reamur/:r/", (req,res) => {
    
    
    let r = req.params.r
  
    let f = 5/4*r;
    let g = (9/4*r)+32;
    let h = 5/4*r+273;


    let response = {
       
        message: "celcius = " + f +
                  "farenheit = " + g+
                  "kelvin = " + h
                 

    }

   
    res.json(response)
 
})

app.get("/farenheit/:r/", (req,res) => {
    
    
    let r = req.params.r
  
    let f = 5/9*(r-32);
    let g = 4/9*(r+32);
    let h = 5/9*(r-32)+273;


    let response = {
       
        message: "celcius = " + f +
                  "reamur = " + g+
                  "kelvin = " + h
                 

    }

   
    res.json(response)
 
})

app.get("/kelvin/:r/", (req,res) => {
    
    
    let r = req.params.r
  
    let f = r-273;
    let g = 9/5*(r-273)+32;
    let h = 4/5*(r-273);


    let response = {
       
        message: "celcius = " + f +
                  "farenheit = " + g+
                  "reamur = " + h
                 

    }

   
    res.json(response)
 
})
app.listen(8080, () => {
    console.log("Server run on port 8080");
    })
