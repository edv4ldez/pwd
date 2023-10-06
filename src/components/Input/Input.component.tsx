"use client";
import React, { use, useEffect, useState } from "react";
import styles from "./input.module.css";
import { generatePassword } from "@/utils/pwdGenerator";

const Input = ({
  setIsCopied,
}: {
  setIsCopied: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [password, setPassword] = useState("s3cur5P@55w0rd");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    setIsCopied(false);
  };

  const handleCopyClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (password) {
      navigator.clipboard.writeText(password).then(() => {
        setIsCopied((prev) => !prev);
      });
    }
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  const handleOnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setPassword(String(generatePassword(32, true, true, true)));
  };

  return (
    <>
      <form className={styles.form}>
        <input
          className={styles.input}
          type="text"
          onChange={handleChange}
          value={"  " + password}
          readOnly
        />
        <br />
        <section className={styles.buttons}>
          <button className={styles.button} onClick={handleOnClick}>
            Generate
          </button>
          <button className={styles.button} onClick={handleCopyClick}>
            Copy!
          </button>
        </section>
      </form>
    </>
  );
};

export default Input;
