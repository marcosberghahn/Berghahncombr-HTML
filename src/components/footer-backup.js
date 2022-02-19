import React from 'react'

import projectStyles from '../style.module.css'
import styles from './footer-backup.module.css'

const FooterBackup = () => {
  return (
    <footer className={styles['Footer']}>
      <div className={styles['container']}>
        <div className={styles['container1']}>
          <span className={styles['text']}>Berghahn Business Studio</span>
          <span>Copyright Â© 2022</span>
        </div>
        <div className={styles['container2']}>
          <span className={` ${styles['text2']} ${projectStyles['large']} `}>
            About Us
          </span>
          <span className={` ${styles['text3']} ${projectStyles['large']} `}>
            Contact
          </span>
        </div>
      </div>
      <img
        alt="image"
        src="/playground_assets/waves-white.svg"
        className={styles['image']}
      />
    </footer>
  )
}

export default FooterBackup
