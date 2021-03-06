const express = require("express");
const serveStatic = require("serve-static");
const app = express();
const https = require("https");
const fs = require("fs");
require('dotenv').config();

const { CERTIFICADO , LLAVE , PASSWORD } = process.env;

app.use( serveStatic(__dirname + "/dist") );

const llavePrivada = fs.readFileSync(`${LLAVE}`);
const certificado = fs.readFileSync(`${CERTIFICADO}`);

   const credenciales = {
      key: llavePrivada,
      cert: certificado,
      passphrase: `${PASSWORD}`
 };

 const puerto = process.env.PORT || 443;
 
 const httpsServer = https.createServer( credenciales , app );

 httpsServer.listen( puerto , () => {
      console.log("Servidor HTTPS escuchando por el puerto: " , puerto );
  } ).on( "error" , err => {
      console.log(err);
  } );