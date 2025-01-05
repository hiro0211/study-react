import "../src/styles/globals.css";
import { useCounter } from "../src/hooks/useCounter";
import { useArray } from "@/src/hooks/useArray";
import { useBgLightBlue } from "@/src/hooks/useBgLightBlue";

export default function App({ Component, pageProps }) {
  const counter = useCounter();
  const inputArray = useArray();
  useBgLightBlue();

  return (
    <>
      <Component {...pageProps} {...counter} {...inputArray}/>
    </>
  );
}
