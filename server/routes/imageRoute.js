const router = require("express").Router();
const Images = require('../models/model');

router.post("/", async (req, res) => {
    try {
        // console.log(req.body);
        const img = await new Images(req.body).save();
        res.status(200).send({ message: "Image Added" })
    }
    catch (err) {
        console.log("Error Occured: ", err);
        res.status(400).send({message: err});
    }
}).get("/", async (req, res)=>{
    try{
        const images = await Images.find();
        if(images.length==0)
        res.status(201).send(images);
        else
        res.status(200).send(images)
    }
    catch(er){
        console.log("Error Occured: ", err);
        res.status(400).send({message: err});
    }
})

module.exports = router;