import { NextResponse } from "next/server";

export async function GET() {
    const products = [
    {
      id: 1,
      name: "Laptop",
      price: 50000,
    },
    {
      id: 2,
      name: "Keyboard",
      price: 2000,
    },
    {
      id: 3,
      name: "Monitor",
      price: 15000,
    },
  ];

  return NextResponse.json(products);
    // return NextResponse.json({
    //     message: "Product API is working",
    // });
}

export async function POST(request: Request) {
  const body = await request.json();

  return NextResponse.json({
    message: "Product created successfully",
    product: body,
  });
}