
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const imageSchema = new Schema({
    image: {type: String , required: true },
    title: {type: String , required: true },
    description: {type: String, required: true}
});

const Image = mongoose.model("image", imageSchema);

module.exports = Image;