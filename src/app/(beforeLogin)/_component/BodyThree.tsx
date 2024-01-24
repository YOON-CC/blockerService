import styles from "@/app/(beforeLogin)/_component/bodyThree.module.css";
import Image from "next/image";
import bodyImg3 from "../../../../public/temp_img3.jpg";

export default function BodyTwo(){
    return (
        <>
            <Image className={styles.bodyImg3} src={bodyImg3} alt="logo" />
            <div className={styles.bodyImg3Text}>
                <div className={styles.bodyImg3TextTitle}>Function</div>
                <div className={styles.bodyImg3TextContent1}>전자서명 & 실시간 채팅 & 분산원장</div>
                <div className={styles.bodyImg3TextContent2}>
                법적효력이 있는 전자서명과 실시간채팅 그리고 분산원장을 통한 <br/> 안전한 서비스등 다양한 기능을 BLOCKER를 통해 만나요. <br/> 덤으로, 사용자 맞춤 최적화 기능도 추가되었습니다.
                </div>
                <div className={styles.bodyImg3TextButton}>
                    <a href="https://www.youtube.com/watch?v=2heD-sxyetw&t=260s" target="_blank" rel="noopener noreferrer" style={{textDecoration: "none", color: "inherit"}}>
                        <div>자세히 보기</div>
                    </a>
                </div>
            </div>
        </>
    )
}