import mongoose, { Schema } from "mongoose";
import Grocery from "./Grocery";

export interface IOrder {
  _id: string;
  product: Schema.Types.ObjectId;
  quantity: number;
  money_spend: number;
  currency: string;
  customer_name: string;
  customer_phone: string;
  delivery_address?: string;
  is_delivery: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const orderSchema = new Schema<IOrder>(
  {
    product: { type: Schema.ObjectId, ref: "Grocery" },
    quantity: { type: Number, required: true, default: 1 },
    money_spend: Number,
    currency: String,
    customer_name: { type: String, required: true },
    customer_phone: { type: String, required: true },
    delivery_address: String,
    is_delivery: { type: Boolean, default: false }
  },
  { timestamps: true }
);

const Order = mongoose.models.Order || mongoose.model<IOrder>("Order", orderSchema);

export default Order;
