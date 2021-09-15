"use strict";
const Club=require("../models/Club.model");
const clubsData=require("../data/clubs.json");

const clubController=(req,res)=>{
    let requestClub=req.query.club;
    let clubNetworth=req.query.net_worth;
    let result=clubsData.find(club =>club.club_name===requestClub);
    let clubObject=new Club(result.club_name,result.stadium_capacity,clubNetworth)
    res.json(clubObject);
}

module.exports=clubController;