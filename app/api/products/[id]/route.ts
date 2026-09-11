import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    
    const response = await fetch(
    `https://dummyjson.com/products/${id}`
  );

  if (!response.ok) {
    return NextResponse.json(
      { message: "Product not found" },
      { status: 404 }
    );
  }

  const product = await response.json();

  return NextResponse.json(product);

//   return NextResponse.json({
//     message: "Product details",
//     productId: id,
//   });
}