import Link from "next/link";
// import { useState } from "react";
import ProductCounter from "./ProductCounter";

export default async function Products() {
    // const [count, setCount] = useState(0);
// console.log("Products page is running on server");

  const response = await fetch("https://dummyjson.com/products");

    // Error Handling
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    
  const data = await response.json();
  const products = data.products;

  return (
    <div>
      <h1>Products</h1>

      {/* <ProductCounter productName="Laptop" /> */}
      {/* <ProductCounter productName={products[0].title} /> */}
      <ProductCounter
        id={products[0].id}
        title={products[0].title}
        price={products[0].price}
      />

      {/* <button onClick={() => setCount(count + 1)}>Count: {count}</button> */}

      {products
        .slice(0, 5)
        .map((product: { id: number; title: string; price: number }) => (
          <div key={product.id}>
            <h2>{product.title}</h2>
            <p>Price: ${product.price}</p>

            <Link href={`/products/${product.id}`}>View Details</Link>
          </div>
        ))}
    </div>
  );
}

// import Link from "next/link";

// export default async function Products() {
//     const response = await fetch(
//       "https://jsonplaceholder.typicode.com/products",
//     );

//      const data = await response.json();
//     const products = await response.json();

//     return (
//       <div>
//             <h1>Products</h1>

//             {products.slice(0, 5).map(
//                 (product: {
//                     id: number;
//                     title: string;
//                     price: number;
//                 }) => (
//                     <div key={product.id}>
//                         <h2>{product.title}</h2>
//                         <p>Price: ${product.price}</p>

//                         <Link href={`/products/${product.id}`}>
//                             View Details
//                         </Link>
//                     </div>
//                 )
//             )}
// {/*
//         <ul>
//           <li>
//             <Link href="/products/1">Laptop</Link>
//           </li>
//           <li>
//             <Link href="/products/2">Keyboard</Link>
//           </li>
//           <li>
//             <Link href="/products/3">Monitor</Link>
//           </li>
//         </ul> */}
//       </div>
//     );
// }
