import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-center pb-8 text-stone-500 text-sm mt-8">
      <p>
        Made with <Link className="underline" href="https://nextjs.org" target="_blank">Next.js</Link>
      </p>
    </footer>
  );
}
