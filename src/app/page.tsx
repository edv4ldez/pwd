"use client";
import styles from "./page.module.css";
import { Input } from "@/components";
import { useState } from "react";

export default function Home() {
  const [isCopied, setIsCopied] = useState(false);

  return (
    <main className={styles.main}>
      {isCopied && <p className={styles.alert}>Text copied to clipboard!</p>}
      <section className={styles.form}>
        <h1 className={styles.title}>Agent P</h1>
        <p className={styles.text}>Password Generator</p>
        <img className={styles.image} src="./assets/img/perry.gif" />
        <Input setIsCopied={setIsCopied} />
      </section>
    </main>
  );
}
