"use strict";
const express=require("express");
const app=express();
const cors=require("cors");
require("dotenv").config();
const PORT=process.env.PORT;
const jwt=require('jsonwebtoken');
const jwksClient=require('jwks-rsa');
app.use(cors());

const client = jwksClient({
    // this url comes from your app on the auth0 dashboard 
    jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`
  });

const getKey=(header, callback)=>{
    client.getSigningKey(header.kid, function(err, key) {
        const signingKey = key.publicKey || key.rsaPublicKey;
        callback(null, signingKey);
      });
}

app.get('/auth',(req,res)=>{
    console.log("i was called")
    // getting the JWT from the request headers
    "Bearer ljdlasiudo87waudljaslidu"
    ["Bearer","ljdlasiudo87waudljaslidu"]
    const token=req.headers.authorization.split(' ')[1];
    // token="ljdlasiudo87waudljaslidu"
    // checking the token if it is valid/verfied
    jwt.verify(token,getKey,{},(err,user)=>{
        if(err){
            res.send('invalid token');
        }
        res.send("Your are authenticated/Authorized");
    })
});

app.listen(PORT,()=>{
    console.log(`Working on port ${PORT}`);
})