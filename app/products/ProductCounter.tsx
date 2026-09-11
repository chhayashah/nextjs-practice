"use client";

import { useState } from "react";

type ProductCounterProps = {
  //   productName: string;
  id: number;
  title: string;
  price: number;
};

export default function ProductCounter({
  // productName
  id,
  title,
  price,
}: ProductCounterProps) {
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* <h2>{productName}</h2> */}
      <h2>{title}</h2>
      <p>Product ID: {id}</p>
      <p>Price: ${price}</p>

      <button onClick={() => setCount(count + 1)}>count: {count}</button>
    </div>
  );
}
