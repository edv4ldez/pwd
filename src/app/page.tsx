"use client";
import styles from "./page.module.css";
import { Input } from "@/components";
import { useState } from "react";

export default function Home() {
  const [isCopied, setIsCopied] = useState(false);

  return (
    <main className={styles.main}>
      <section className={styles.form}>
        <h1 className={styles.title}>Agent P</h1>
        <p className={styles.text}>Password Generator</p>
        <img className={styles.image} src="./assets/img/perry.gif" />
        {isCopied && (
          <div className={styles.alerts}>
            <p className={styles.alert}>Text copied to clipboard!</p>
            <p className={styles.alert2}>Text copied to clipboard!</p>
          </div>
        )}
        <Input setIsCopied={setIsCopied} />
      </section>
      <div className={styles.footer}>
        <p className={styles.under}>By @edv4ldez11</p>
        <p className={styles.below}>By @edv4ldez11</p>
      </div>
    </main>
  );
}
