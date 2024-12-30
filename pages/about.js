import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/src/styles/Home.module.css";
import { Footer } from "@/src/components/Footer/Footer";
import { Links } from "@/src/components/Links";
import { Header } from "@/src/components/Header/Header";
import { Headline } from "@/src/components/Headline/Headline";
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
        ></Headline>
        <Links title="sss" page="ff" />
        <Footer />
      </div>
    </>
  );
}
