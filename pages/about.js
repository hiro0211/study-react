import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Footer } from "@/components/Footer";
import { Links } from "@/components/Links";
import { Header } from "@/components/Header";
import { Headline } from "@/components/Headline";
import { Children } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home(props) {
  const { title } = props;
  return (
    <>
      <Header />
      <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      >
        <Headline
          title="Index Page"
          number={111}
          array={[1, 2, 3]}
          code={<span>aaa</span>}
          onClick={() => alert("clicked")}
        >
          
          </Headline>
        <Links title="sss" page="ff" />
        <Footer />
      </div>
    </>
  );
}
