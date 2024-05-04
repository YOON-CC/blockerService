import styles from "@/styles/layout/header.module.css";
import Link from "next/link";
import { auth } from "@/auth"; // auth 추가
import { signOut } from "next-auth/react";
import SignOutBtn from "./client_component/SignOutBtn";
import { handlePostMethod } from "@/restful/login";
import appStore from "@/store/appStore";
import Cookies from "js-cookie";
import Btn from "./client_component/Btn";

export default async function Header() {
  const session = await auth();

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
        {/* <Btn /> */}
      </div>
    </>
  );
}
