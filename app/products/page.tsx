import Link from "next/link";

export default function Products() {
    return (
      <div>
        <h1>Products</h1>

        <ul>
          <li>
            <Link href="/products/1">Laptop</Link>
          </li>
          <li>
            <Link href="/products/2">Keyboard</Link>
          </li>
          <li>
            <Link href="/products/3">Monitor</Link>
          </li>
        </ul>
      </div>
    );
}