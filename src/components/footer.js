import React from 'react'

import styles from './footer.module.css'

const Footer = () => {
  return (
    <footer className={styles['Footer']}>
      <div className={styles['container']}>
        <div className={styles['container1']}>
          <span className={styles['text']}>Berghahn Business Studio</span>
          <span>Copyright Â© 2022</span>
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

export default Footer
