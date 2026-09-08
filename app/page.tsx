import Link from "next/link"

export default function Home() {
  return (
    <div>
      <h1>Hello Next.js</h1>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </div>
  );
}
