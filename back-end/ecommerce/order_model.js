import mongoose, { mongo } from "mongoose";

const orderItemsSchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
    productQuantity: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const orderSchema = new mongoose.Schema(
  {
    orderedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    orderItems: {
      type: [orderItemsSchema],
    },
    price: {
      type: Number,
      required: true,
    },

    deliveryAddress: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "cancelled", "delivered"],
      default: "pending",
    },
  },
  { timestamps: true }
);

export const Order = mongoose.model("Order", orderSchema);
