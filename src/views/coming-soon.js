import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import SecondaryButton from '../components/secondary-button'
import FooterGray from '../components/footer-gray'
import projectStyles from '../style.module.css'
import styles from './coming-soon.module.css'

const ComingSoon = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>ComingSoon - Berghahn.com.br</title>
        <meta
          name="description"
          content="Products That Move Humanity Forward"
        />
        <meta property="og:title" content="ComingSoon - Berghahn.com.br" />
        <meta
          property="og:description"
          content="Products That Move Humanity Forward"
        />
      </Helmet>
      <Header></Header>
      <div className={styles['container1']}>
        <div className={styles['Main']}>
          <div className={styles['container2']}>
            <h1
              className={` ${styles['text']} ${projectStyles['headingOne']} `}
            >
              You Work With
            </h1>
            <h1 className={styles['text1']}>Soft Design System</h1>
            <p className={` ${styles['text2']} ${projectStyles['lead']} `}>
              <span className={styles['text3']}>
                The time is now for it be okay to be great. Subscribe now and
                get notified when it&apos;s launched!
              </span>
            </p>
            <div className={styles['container3']}>
              <input
                type="text"
                placeholder="Email here"
                className={` ${styles['textinput']} ${projectStyles['small']} ${projectStyles['input']} `}
              />
              <SecondaryButton button="Subscribe"></SecondaryButton>
            </div>
          </div>
          <div className={styles['Grid']}>
            <img
              alt="image"
              src="/playground_assets/iphone-3-1000w.png"
              className={styles['image']}
            />
            <img
              alt="image"
              src="/playground_assets/iphone-2-1000w.png"
              className={styles['image01']}
            />
            <img
              alt="image"
              src="/playground_assets/iphone-4-1000w.png"
              className={styles['image02']}
            />
            <img
              alt="image"
              src="/playground_assets/iphone-1-1000w.png"
              className={styles['image03']}
            />
            <img
              alt="image"
              src="/playground_assets/iphone-2-1000w.png"
              className={styles['image04']}
            />
            <img
              alt="image"
              src="/playground_assets/iphone-4-1000w.png"
              className={styles['image05']}
            />
            <img
              alt="image"
              src="/playground_assets/iphone-1-1000w.png"
              className={styles['image06']}
            />
            <img
              alt="image"
              src="/playground_assets/iphone-3-1000w.png"
              className={styles['image07']}
            />
            <img
              alt="image"
              src="/playground_assets/iphone-2-1000w.png"
              className={styles['image08']}
            />
            <img
              alt="image"
              src="/playground_assets/iphone-4-1000w.png"
              className={styles['image09']}
            />
            <img
              alt="image"
              src="/playground_assets/iphone-1-1000w.png"
              className={styles['image10']}
            />
            <img
              alt="image"
              src="/playground_assets/iphone-3-1000w.png"
              className={styles['image11']}
            />
            <img
              alt="image"
              src="/playground_assets/iphone-4-1000w.png"
              className={styles['image12']}
            />
            <img
              alt="image"
              src="/playground_assets/iphone-1-1000w.png"
              className={styles['image13']}
            />
            <img
              alt="image"
              src="/playground_assets/iphone-3-1000w.png"
              className={styles['image14']}
            />
            <img
              alt="image"
              src="/playground_assets/iphone-2-1000w.png"
              className={styles['image15']}
            />
          </div>
        </div>
      </div>
      <FooterGray></FooterGray>
    </div>
  )
}

export default ComingSoon
