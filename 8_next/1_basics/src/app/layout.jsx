import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// metadata tanımlamak için export const metadata yöntemi kullanılır
export const metadata = {
  title: {
    default: "Amazon",
    template: "%s | Amazon",
  },
  description: "Amazon is a website that sells products",
  keywords:
    "amazon, products, electronics, books, clothes, shoes, toys, games, gifts",
  authors: [{ name: "John Doe" }],
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}
