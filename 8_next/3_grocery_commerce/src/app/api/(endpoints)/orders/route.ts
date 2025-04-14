import { NextResponse } from "next/server";
import Order from "../../models/Order";
import connectMongo from "../../utils/connectMongo";

export async function GET() {
  try {
    await connectMongo();

    const orders = await Order.find().populate("product");

    return NextResponse.json({ orders });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Siparişler alınamadı" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    await connectMongo();
    
    const orderData = await req.json();
    
    // Sipariş oluştur
    const newOrder = await Order.create(orderData);
    
    return NextResponse.json({ 
      message: "Sipariş başarıyla oluşturuldu", 
      order: newOrder 
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Sipariş oluşturulamadı" }, { status: 500 });
  }
}
