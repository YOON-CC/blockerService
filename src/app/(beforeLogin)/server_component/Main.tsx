import styles from "@/styles/main/main.module.css";
import Header from "@/layout/Header";
import Image from "next/image";
import mainImg from "../../../../public/mainImg.png";
import BodyOne from "@/app/(beforeLogin)/server_component/BodyOne";
import BodyTwo from "@/app/(beforeLogin)/server_component/BodyTwo";
import BodyThree from "@/app/(beforeLogin)/server_component/BodyThree";
import Footer from "@/layout/Footer";
import appStore from "@/store/appStore";
import { redirect, useRouter } from "next/navigation";

export default function Main() {
  console.log(appStore.value);
  return (
    <>
      <div className={styles.container}>
        <Header />
        <Image className={styles.mainImg} src={mainImg} alt="logo" />
      </div>
      <div className={styles.container2}>
        <div className={styles.body1}>
          <BodyOne />
        </div>
        <div className={styles.body2}>
          <BodyTwo />
        </div>
        <div className={styles.body3}>
          <BodyThree />
        </div>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </>
  );
}
