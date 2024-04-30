import mongoose, { Mongoose, Schema } from "mongoose";

const productSchema = new mongoose.Schema({
  product_category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
  product_name: {
    type: String,
    required: true,
  },
  product_quantity: {
    type: Number,
    required: true,
    default: 0,
  },
  description: {
    type: String,
    required: true,
  },
  product_price: {
    type: Number,
    required: true,
    default: 0,
  },
},{timestamps:true});

export const Product = mongoose.model("Product", productSchema);



