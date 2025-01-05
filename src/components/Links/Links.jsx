import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "./Links.module.css";
import { useCallback, useState } from "react";

const ITEMS = [
  {
    href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Deploy now →",
    style: styles.primary
  },
  {
    href: "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Read our documentation →",
    style: styles.secondary
  },
];

export const Links = (props) => {
  const { title, page } = props;
  const [items, setItems] = useState(ITEMS);

  const handleReduce = useCallback(() => {
    setItems((prevItems) =>  prevItems.slice( 0, prevItems.length - 1));
  },  []);
  return (
    <>
      <main className={styles.main}>
        <button onClick={handleReduce}>減らす</button>
        
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol>
          <li>
            Get started by editing <code>pages/{title}.js</code>.
          </li>
          <li>{page}</li>
        </ol>

        <div className={styles.ctas}>
          {items.map((item) => {
            return (
              <a
                key={item.href}
                className={item.style}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>{item.title}</h3>
              </a>
            );
          })}
        </div>
      </main>
    </>
  );
};
