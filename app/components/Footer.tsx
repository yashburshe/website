import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-center pb-8 text-stone-500 text-sm mt-8">
      <p>
        Made with <Link className="underline" href="https://nextjs.com" target="_blank">Next.js</Link>
      </p>
      {/* <p>
        Layout inspired by the <Link className="underline" href="https://store.google.com/?hl=en-US" target="_blank">Google Store</Link>
      </p> */}
    </footer>
  );
}
