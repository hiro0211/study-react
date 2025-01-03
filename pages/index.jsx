import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "/src/components/Footer/Footer";
import { Links } from "@/src/components/Links";
import { Header } from "@/src/components/Header/Header";
import { Headline } from "@/src/components/Headline/Headline";
import { useCallback, useEffect, useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState("");
  const [isShow, setIsShow] = useState(false);
  const [array, setSArray] = useState([]);

  const handleClick = useCallback(
    (e) => {
      console.log(count);
      if (count < 10) {
        setCount((prevcount) => prevcountf + 1);
      }
    },
    [count]
  );

  useEffect(() => {
    document.body.style.backgroundColor = "lightblue";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  const handleChange = useCallback((e) => {
    if (e.target.value.length > 5) {
      alert("5文字以内にしてください");
      return;
    }
    setText(e.target.value.trim());
  }, []);

  const handleShow = useCallback(() => {
    setIsShow((isShow) => {
      return !isShow;
    });
  });

  const handleAdd = useCallback(() => {
    setSArray((prevArray) => {
      if (prevArray.some(item => item === text)){
        alert("同じ項目が存在します");
        return prevArray;
      }
      return [...prevArray, text];});
  }, [text]);

  return (
    <>
      <Header />
      <h1>カウントアップ: {count}</h1>
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
