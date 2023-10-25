const express = require("express");
const router = express.Router();
const Homes = require("../models/homes");

//geting houses
router.get("/homes", async(req, res)=>{
   try {
      const Data =  await Homes.find();
      res.json(Data);
   } catch (error) {
       res.status(500).json({message:error.message});
   }
});

///geting single house
router.get("/homesget/:id", GetHome, (req, res)=>{
     const {id} = req.params;
     res.json(res.home)
});

//Creating Home
router.post("/posthome", async(req, res)=>{
     const {title, price, description, youtube, sallercode} =  req.body;
     const code  = Math.random(40491, 89348447748486486565555555555555554)+Math.random(40491, 89348447748486486565555555555555554);

     const Data = new Homes({
        title:title, price:price,
        description:description,   youtube:youtube,
        sallercode:sallercode, code:code
     });

     try {
        const newData = await Data.save();
        res.status(201).json(newData);
     } catch (error){
        res.status(500).json({message:error.message});
     }
});


//Updating Home
router.patch("/updatehome/:id", GetHome, async(req, res)=>{ 
    const {title, price, description, youtube} =  req.body;

   res.home.title = title;
   res.home.price = price;
   res.home.description = description;
   res.home.youtube = youtube;

   try {
      const updateData = await res.home.save();
      res.status(201).json(updateData);
   } catch (error){
      res.status(500).json({message:error.message});
   }


});


//Delete home
router.delete("/delete/:id", GetHome,  async(req, res)=>{
   try {
        await res.json.remove();
        res.json({message:"Home deleted  !"});
   } catch (error) {
      res.status(500).json({message:error.message});
   }
});


async function GetHome(req, res, next) {
   let home;
   try {
      home = await Homes.findById(req.params.id);
      if(home == null){
         return res.status(404).json({message:"Cannot find home"});
      }
   } catch (error) {
      res.status(500).json({message:error.message});
   }

   res.home = home;
   next();
}


module.exports = router;