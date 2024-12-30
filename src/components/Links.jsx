import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "./Links.module.css";

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
  return (
    <>
      <main className={styles.main}>
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
          {ITEMS.map((item) => {
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
          {/* <a
            className={styles.primary}
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            Read our documentation
          </a> */}
        </div>
      </main>
    </>
  );
};
