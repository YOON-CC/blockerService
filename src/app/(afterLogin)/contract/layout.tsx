import {ReactNode} from "react";
import styles from '@/app/(afterLogin)/contract/layout.module.css'

type Props = { children: ReactNode };
export default function Layout({ children }: Props) {
  return (
    <div className={styles.contractContainer}>
      <div className={styles.contractContainer1}>
        <div className={styles.contractContainer1Layout1}>
          <div className={styles.contractContainer1Layout1Title}>Progress</div>
        </div>
        <div className={styles.contractContainer1Layout2}></div>
      </div>
      <div className={styles.contractContainer2}>
        <div className={styles.contractContainer2Layout1}></div>
        <div className={styles.contractContainer2Layout2}></div>
        <div className={styles.contractContainer2Layout3}></div>
      </div>
      <div className={styles.contractContainer3}>
        <div className={styles.contractContainer3Layout1}></div>
        <div className={styles.contractContainer3Layout2}></div>
      </div>
      {children}
    </div>
  )
}