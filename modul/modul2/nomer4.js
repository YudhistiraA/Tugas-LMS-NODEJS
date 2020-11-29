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

app.get("/bmi/", (req,res) => {
    // mengambil nilai panjang dari body
    
    let r = Number(req.body.berat) 
    let t = Number(req.body.tinggi)
  
    
    let bmi = r/t;
    
  
  
    
	if (bmi > 27) {
		keterangan = "Gemuk, Kelebihan berat badan tingkat berat";
	}else if ((bmi >= 25.1) && (bmi <= 27)){
		keterangan = "Gemuk, Kelebihan berat badan tingkat ringan";
	}else if ((bmi >= 18.5) && (bmi <= 25)){
		keterangan = "Normal";
	} else if ((bmi >= 17) && (bmi <= 18.4)){
		keterangan = "Kurus, Kekurangan berat badan tingkat ringan";
	}else {
		keterangan = "Kurus, Kekurangan berat badan tingkat berat";
	}
    
    let response = {keterangan

}
    res.json(response)
     
})

app.listen(8080, () => {
    console.log("Server run on port 8080");
})