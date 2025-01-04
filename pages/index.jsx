import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "/src/components/Footer/Footer";
import { Links } from "@/src/components/Links";
import { Header } from "@/src/components/Header/Header";
import { Headline } from "@/src/components/Headline/Headline";
import { useCallback, useEffect, useState } from "react";
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



export default function Home() {
  const {count, isShow, handleClick, handleShow} = useCounter();
  const {text, array, handleChange, handleAdd} = useArray();
  useBgLightBlue();

  return (
    <>
      <Header />
      <h1>カウント: {count}</h1>
      <button onClick={handleClick}>カウントアップ</button>
      <input type="text" value={text} onChange={handleChange} />
      <Headline title="Index Page" onClick={() => alert("clicked")} />
      <button onClick={handleShow}>表示/非表示</button>

      {isShow && <Links title="INDEX" />}
      <button onClick={handleAdd}>追加</button>
      <ul>
        {array.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
      <Footer />
    </>
  );
}
