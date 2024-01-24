import styles from "@/app/(beforeLogin)/_component/main.module.css";
import Header from "@/app/(beforeLogin)/_component/Header";
import Image from "next/image";
import mainImg from "../../../../public/mainImg.png";
import BodyOne from "@/app/(beforeLogin)/_component/BodyOne";
import BodyTwo from "@/app/(beforeLogin)/_component/BodyTwo";
import BodyThree from "@/app/(beforeLogin)/_component/BodyThree";
import Footer from "@/app/(beforeLogin)/_component/Footer";

export default function Main(){
    return (
        <>
            <div className={styles.container}>
                <Header/>
                <Image className={styles.mainImg} src={mainImg} alt="logo" />
                <div className={styles.body1}>
                    <BodyOne/>
                </div>
                <div className={styles.body2}>
                    <BodyTwo/>
                </div>
                <div className={styles.body3}>
                    <BodyThree/>
                </div>

            </div>
            <div className={styles.footer}>
                <Footer/>
            </div>
        </>
    )
}