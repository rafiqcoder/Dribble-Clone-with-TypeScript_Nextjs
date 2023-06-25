import './globals.css'
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Dribble",
  description: "Showcase and discover remarble developers projects.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer></Footer>
      </body>
    </html>
  );
}
