var express = require("express");
var formidable = require("formidable");
var app = express();
app.use(express.static(__dirname + '/public'));
app.get("/ajax", (req, res) => {
    var name = req.query.name;
    var email = req.query.email;
    var phone = req.query.phone;
    var data = { name: name, email: email, phone: phone, message:"Data submitted successfully." };
    //res.writeHead(200, { "Content-type": "application/json" })
    res.json(data);
});

app.listen(8181);
console.log("Server running at address: http://localhost:8181");