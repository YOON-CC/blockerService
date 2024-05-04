"use client";

import styles from "@/styles/layout/header.module.css";

import Link from "next/link";
import { signOut } from "next-auth/react";

export default function LoginAuthIcon() {
  const onClick = async () => {
    await signOut({
      redirect: true,
      callbackUrl: "/",
    });
  };

  return (
    <>
      <div className={styles.login} onClick={onClick}>
        LOGOUT
      </div>
    </>
  );
}
