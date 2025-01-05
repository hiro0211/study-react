import "../src/styles/globals.css";
import { useCounter } from "../src/hooks/useCounter";
import { useArray } from "@/src/hooks/useArray";
import { useBgColor } from "@/src/hooks/useBgColor";

export default function App({ Component, pageProps }) {
  const counter = useCounter();
  const inputArray = useArray();
  useBgColor();

  return (
    <>
      <Component {...pageProps} {...counter} {...inputArray}/>
    </>
  );
}
