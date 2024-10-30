const express = require('express');
const consign = require("consign");
const bodyParser = require("body-parser");

module.exports =()=>{
    const app= express();
    app.use(bodyParser.urlencoded({extended:true})); // permite passar parametro por url
    app.use(bodyParser.json()); // permite usar json
    consign().include('controller').include().into(app)//incluindo o caminho para a pasta controler no app

    return app;
}