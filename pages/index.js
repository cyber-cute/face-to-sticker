import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'

import { motion } from 'framer-motion';

export default function Home() {

  return (
    <>
      <motion.div
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 15 }}
      transition={{ duration: 0.5 }}
      >
      <main className={styles.main}>
        <div className={styles.info}>
          <p>We'll turn your face into a sticker :)</p>
          <h1>StiAI</h1>
          <p>Share your photos with us and we'll send them to you in sticker form.
          </p>
          <Link href='/sticker'><button>Make Sticker</button></Link>
        </div>
        <div className={styles.imagesection}>
          <div>
            <p>Original Photo</p>
            <Image src={"https://replicate.delivery/pbxt/KU1AG0cit5nc3xIG1BBZ6DKkhunvvGsZXmEZzuW9HPYVkj8o/MTk4MTczMTkzNzI1Mjg5NjYy.webp"} width='400' height='400' alt='original image' />
          </div>
          <div>
            <p>Sticker Photo</p>
            <Image src={"https://replicate.delivery/pbxt/rMZtcnlQePzoDqd4E6roAvitrNBfnHnDNrP4pptSlbB2lQbSA/ComfyUI_00001_.png"} width='400' height='400' alt='original image' />
          </div>
        </div>
      </main>
      </motion.div>
    </>
  )
}
