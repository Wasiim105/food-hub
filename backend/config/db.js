import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://Wasim105:Wasim2001@cluster0.y7ykccs.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}