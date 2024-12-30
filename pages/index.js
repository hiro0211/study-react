import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "/src/components/Footer/Footer";
import { Links } from "@/src/components/Links";
import { Header } from "@/src/components/Header/Header";
import { Headline } from "@/src/components/Headline/Headline"; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Header />
      <Headline title="Index Page" onClick={() => alert("clicked")} />
      <Links title="INDEX" />
      <Footer />
    </>
  );
}
