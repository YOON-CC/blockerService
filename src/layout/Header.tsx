import styles from "@/styles/layout/header.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>BLOCKER</div>
        <Link href="/login" className={styles.login}>
          LOGIN
        </Link>
      </div>
    </>
  );
}
