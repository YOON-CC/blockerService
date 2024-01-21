import styles from "@/app/(beforeLogin)/_component/main.module.css";
import Header from "@/app/(beforeLogin)/_component/Header";
import Image from "next/image";
import mainImg from "../../../../public/mainImg.png";


export default function Main(){
    return (
        <>
            <div className={styles.container}>
                <Header/>
                <Image className={styles.mainImg} src={mainImg} alt="logo" />
            </div>
        </>
    )
}