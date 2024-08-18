import mongoose from "mongoose";

const cardSchema = new mongoose.Schema({
    title: String,
    description: String,
}, { timestamps: true });

export default  mongoose.model("Card", cardSchema);
