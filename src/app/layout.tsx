import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

const poppins = Poppins({ 
  subsets: ["latin"], 
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap" 
});


export const metadata: Metadata = {
  title: "Sisters Street",
  description: "Sister Street is a women-only app  that provides a secure walking experience, particularly at night. Users connect with a supportive community through text, call or walking together.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
