import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Next.js Practice",
  description: "Learning Next.js step by step",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <nav>
          <Link href="/">Home</Link>
          {" | "}
          <Link href="/about">About</Link>
          {" | "}
          <Link href="/contact">Contact</Link>
        </nav>

        <hr />

        {children}
      </body>
    </html>
  );
}
