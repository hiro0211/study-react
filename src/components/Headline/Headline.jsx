import { Geist, Geist_Mono } from "next/font/google";
import styles from "./Headline.module.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const Headline = (props) => {
  console.log(props); // propsを確認

  const { title, code, onClick } = props;

  return (
    <>
      <h1>{title}</h1>
      <p>{code}</p>
      <button onClick={onClick}>ボタン</button>
    </>
  );
};
