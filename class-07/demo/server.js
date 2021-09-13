"use strict";
const express=require('express');
const app=express();
const cors = require('cors');
app.use(cors());
require('dotenv').config();
const weatherData=require('./data/weather.json');
const PORT=process.env.PORT;

app.get('/',(req,res)=>{

    res.status(200).send("Hello world");
});

app.get('/data',(req,res)=>{
    let city=weatherData[2];
    let forecastDays=city.data.map(day=>{
        return {
            date:day.valid_date,
            description:day.weather.description
        }
    })
    let customRespone={
        forecast:forecastDays,
        city_name:city.city_name   
    }
    res.status(200).json(customRespone);
});

app.get('/weather-data',(req,res)=>{
    let lat=Number(req.query.lat);
    let lon=Number(req.query.lon);
    if (lat&&lon){
        let result=[];
        weatherData.forEach(item=>{
            if(item.lat===lat&&item.lon===lon){
                result.push(item)
            }
        })
        let city=result[0];
        if (result.length>0){
            let foreCast=city.data.map(item=>{
                return {
                    date:item.datetime,
                    description:item.weather.description
                }
            })
            res.status(200).json(foreCast);
        }else{
            res.status(404).send("resources not found")
        }

    }else{
        res.status(400).send("please provide correct query params");
    }

})

app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}` )
});