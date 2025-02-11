import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-dvh ">
        <Banner/>
        <Header />
        <div>
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
