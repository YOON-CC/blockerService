import styles from "@/styles/layout/header.module.css";
import Link from "next/link";
import { auth } from "@/auth"; // auth 추가
import { signOut } from "next-auth/react";
import SignOutBtn from "./client_component/SignOutBtn";

export default async function Header() {
  const session = await auth(); // session 호출 추가
  console.log(session, "fsdf"); // console log 추가
  console.log("안녕안녕");

  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>BLOCKER</div>
        {session === null && (
          <Link href="/i/flow/login" className={styles.login}>
            LOGIN
          </Link>
        )}
        {session !== null && <SignOutBtn />}
      </div>
    </>
  );
}
