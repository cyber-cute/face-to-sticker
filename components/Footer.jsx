import styles from '@/styles/Home.module.css'
import Link from 'next/link'

export default function Footer() {
  return (
    <div className={styles.footer}>
        <Link href='https://www.linkedin.com/in/be%C5%9Fir-g%C3%BClbahar/'><p>Made by Besir Gulbahar</p></Link>
    </div>
  )
}
