import Link from "next/link"
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>Hello Next.js</h1>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>

      <Image src="/images.jpeg" alt="images" width={500} height={300} />
    </div>
  );
}
