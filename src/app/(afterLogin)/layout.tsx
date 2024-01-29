import {ReactNode} from "react";
// import styles from '@/app/(beforeLogin)/_component/main.module.css';
import styles from '@/app/(afterLogin)/layout.module.css'
import Image from "next/image";
import LogoImg from "../../../public/MainLogo.png";
import Link from "next/link"

type Props = { children: ReactNode};

            
export default function Layout({ children }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.Logo}>
          <Image className={styles.LogoImg} src={LogoImg} alt="logo" />
        </div>
        <div className={styles.categoryContainer}>
          <Link href="/board" className={styles.category} style={{ textDecoration: 'none'}}>Board</Link>
          <Link href="/postwrite" className={styles.category} style={{ textDecoration: 'none'}}>Post</Link>
          <div className={styles.category}>Contract</div>
          <Link href="/write" className={styles.category} style={{ textDecoration: 'none'}}>Write</Link>
          <div className={styles.category}>Mypage</div>
        </div>
        <div className={styles.Logout}>LogOut</div>
      </div>
      {children}
    </div>
  )
}