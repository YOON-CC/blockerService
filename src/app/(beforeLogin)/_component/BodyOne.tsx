import styles from "@/app/(beforeLogin)/_component/bodyOne.module.css";
import Image from "next/image";
import bodyImg1 from "../../../../public/temp_img.jpg";

export default function BodyOne(){
    return (
        <>
            <Image className={styles.bodyImg1} src={bodyImg1} alt="logo" />
            <div className={styles.bodyImg1Text}>
                <div className={styles.bodyImg1TextTitle}>Introduce</div>
                <div className={styles.bodyImg1TextContent1}>모두를 위한 비대면 계약 서비스</div>
                <div className={styles.bodyImg1TextContent2}>
                    바쁜 삶과 스케줄때문에 대면 계약을 하지 못하세요? <br/> 그런 당신을 위해 BLOCKER를 추천합니다. <br/> '블록체인'을 통해 안전한 비대면 서비스로 시간을 절약하세요.
                </div>
                <div className={styles.bodyImg1TextButton}>
                    <a href="https://github.com/YOON-CC/Blocker-web" target="_blank" rel="noopener noreferrer" style={{textDecoration: "none", color: "inherit"}}>
                        <div>자세히 보기</div>
                    </a>
                </div>
            </div>
        </>
    )
}