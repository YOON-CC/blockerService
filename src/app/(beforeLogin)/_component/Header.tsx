import styles from "@/app/(beforeLogin)/_component/header.module.css";
import Image from "next/image";

export default function Header(){
    return (
        <>
            <div className={styles.container}>
                <div className={styles.title}>BLOCKER</div>
                <div className={styles.login}>LOGIN</div>
            </div>
        </>
    )
}