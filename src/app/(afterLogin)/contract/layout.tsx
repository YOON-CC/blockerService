import {ReactNode} from "react";
import styles from '@/app/(afterLogin)/contract/layout.module.css'

type Props = { children: ReactNode };
export default function Layout({ children }: Props) {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}