import { Metadata } from "next";
import Footer from "./components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: 'Yash Burshe',
  description: 'My slice of the internet',
  applicationName: 'Yash Burshe',
  authors: {url: 'https://yashburshe.com', name: 'Yash Burshe'},
  generator: 'Next.js',
  creator: 'Yash Burshe',
  publisher: 'Yash Burshe',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head><link rel="icon" href="/favicon.ico" sizes="any" /></head>
      <body className="min-h-dvh">
        {/* <Banner/> */}
        {/* <Header /> */}
        <div>
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
