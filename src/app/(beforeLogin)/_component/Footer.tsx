import styles from "@/app/(beforeLogin)/_component/footer.module.css";
import Image from "next/image";
import footerImg from "../../../../public/footerLogo.png";

export default function Footer(){
    return (
        <>
            <Image className={styles.footerImg} src={footerImg} alt="logo" />
            <div className={styles.footerContainer}>
                <div className={styles.footerContainerTitle}>@All copyrights belong to the people below.</div>
                <div className={styles.footerContainerContent}>
                    <a href="https://github.com/nu-jey" target="_blank" rel="noopener noreferrer" style={{textDecoration: "none", color: "white"}}>🔗오예준</a>
                    <a href="https://github.com/YOON-CC" target="_blank" rel="noopener noreferrer" style={{textDecoration: "none", color: "white"}}>🔗조윤찬</a>
                    <a href="https://github.com/preferrrr" target="_blank" rel="noopener noreferrer" style={{textDecoration: "none", color: "white"}}>🔗이선호</a>
                    <a href="https://github.com/ho-sick99" target="_blank" rel="noopener noreferrer" style={{textDecoration: "none", color: "white"}}>🔗문준호</a>
                    <a href="https://github.com/thisis-joe" target="_blank" rel="noopener noreferrer" style={{textDecoration: "none", color: "white"}}>🔗우동균</a>
                </div>
            </div>
        </>
    )
}