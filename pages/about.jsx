import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/src/styles/Home.module.css";
import { Footer } from "@/src/components/Footer/Footer";
import { Links } from "@/src/components/Links";
import { Header } from "@/src/components/Header/Header";
import { Headline } from "@/src/components/Headline/Headline";
import { Children, useState } from "react";
import { useCounter } from "../src/hooks/useCounter";
import { useArray } from "@/src/hooks/useArray";
import { useBgLightBlue } from "@/src/hooks/useBgLightBlue";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function About(props) {
  const { title } = props;
  const { count, isShow, handleClick, handleShow } = useCounter();
  const { text, array, handleChange, handleAdd } = useArray();
  useBgLightBlue();

  return (
    <>
      <Header />
      <h1>カウント: {count}</h1>
      <button onClick={handleClick}>カウントアップ</button>
      <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      >
        <Headline
          title="ABOUT Page"
          number={111}
          array={[1, 2, 3]}
          code={<span>{count}</span>}
          onClick={() => alert("clicked")}
        ></Headline>
        <button onClick={handleShow}>表示/非表示</button>
        <h1>{title}</h1>
        {isShow && <Links title="ABOUT" />}
        <input type="text" value={text} onChange={handleChange} />
        <button onClick={handleAdd}>追加</button>
        <ul>
          {array.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
        <Footer />
      </div>
    </>
  );
}
