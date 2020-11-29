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

app.get("/angka/:r/", (req,res) => {
    let r = req.params.r
   
    convertBase.bin2dec = convertBase(2, 10);

    let y =convertBase.bin2dec(r)
    let response = {
       
        message: "hasil = " + y
    }

   
    res.json(response)

})

app.listen(8080, () => {
    console.log("Server run on port 8080");
})