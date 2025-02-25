import Footer from "./components/Footer";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
