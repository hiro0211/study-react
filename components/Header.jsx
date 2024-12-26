import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Footer } from "@/components/Footer";
import { Links } from "@/components/Links";

export const Header = () => {
  return (
    <Head>
      <title>Study React</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};
