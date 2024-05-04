import styles from "@/styles/main/bodyTwo.module.css";
import Image from "next/image";
import bodyImg2 from "../../../../public/temp_img2.jpg";

export default function BodyTwo() {
  return (
    <>
      <Image className={styles.bodyImg2} src={bodyImg2} alt="logo" />
      <div className={styles.bodyImg2Text}>
        <div className={styles.bodyImg2TextTitle}>Support</div>
        <div className={styles.bodyImg2TextContent1}>WEB & APP 지원</div>
        <div className={styles.bodyImg2TextContent2}>
          BLOCKER는 웹버전과 앱버전을 지원합니다. <br /> 다양한 디바이스를 통해
          BLOCKER를 이용해보세요. <br /> 다중지원 BLOCKER를 통해, 어디서든
          간편하게 만나요!
        </div>
        <div className={styles.bodyImg2TextButton}>
          <a
            href="https://github.com/nu-jey/Blocker-iOS"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div>자세히 보기</div>
          </a>
        </div>
      </div>
    </>
  );
}
