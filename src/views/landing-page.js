import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import PrimaryPinkButton from '../components/primary-pink-button'
import PrimaryBlueButton from '../components/primary-blue-button'
import Footer from '../components/footer'
import projectStyles from '../style.module.css'
import styles from './landing-page.module.css'

const LandingPage = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Berghahn.com.br</title>
        <meta
          name="description"
          content="Products That Move Humanity Forward"
        />
        <meta property="og:title" content="Berghahn.com.br" />
        <meta
          property="og:description"
          content="Products That Move Humanity Forward"
        />
      </Helmet>
      <Header></Header>
      <div className={styles['Hero']}>
        <div className={styles['container01']}>
          <div className={styles['Card']}>
            <h1
              className={` ${styles['text']} ${projectStyles['headingOne']} `}
            >
              Products that move humanity forward
            </h1>
            <span className={` ${styles['text01']} ${projectStyles['lead']} `}>
              <span>
                We help purpose-driven businesses connect deeply with their
                public.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
            <div className={styles['container02']}>
              <div className={styles['container03']}>
                <a href="#the-contact-form" className={styles['link']}>
                  <PrimaryPinkButton
                    button="contact us"
                    className={styles['component1']}
                  ></PrimaryPinkButton>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        alt="image"
        src="/playground_assets/curved6-1500w.jpg"
        className={styles['image']}
      />
      <div className={styles['Contact']}>
        <div className={styles['container04']}>
          <div id="the-contact-form" className={styles['Form']}>
            <h2
              className={` ${styles['text03']} ${projectStyles['headingOne']} `}
            >
              <span>Say Hi!</span>
            </h2>
            <span className={` ${styles['text05']} ${projectStyles['lead']} `}>
              We&apos;d like to chat with you.
            </span>
            <form className={styles['form1']}>
              <label
                className={` ${styles['text06']} ${projectStyles['label']} `}
              >
                My name is
              </label>
              <input
                type="text"
                placeholder="Full Name"
                className={` ${styles['textinput']} ${projectStyles['small']} ${projectStyles['input']} `}
              />
              <label
                className={` ${styles['text07']} ${projectStyles['label']} `}
              >
                I&apos;m looking for
              </label>
              <input
                type="text"
                placeholder="What you love"
                className={` ${styles['textinput1']} ${projectStyles['input']} ${projectStyles['small']} `}
              />
              <label
                className={` ${styles['text08']} ${projectStyles['label']} `}
              >
                Your message
              </label>
              <textarea
                rows="8"
                placeholder="I want to say that..."
                className={` ${styles['textarea']} ${projectStyles['small']} ${projectStyles['textarea']} `}
              ></textarea>
            </form>
            <div className={styles['container05']}>
              <div className={styles['container06']}>
                <PrimaryBlueButton button="send message"></PrimaryBlueButton>
              </div>
            </div>
          </div>
          <div className={styles['Info']}>
            <div className={styles['container07']}>
              <h3 className={projectStyles['headingTwo']}>
                <span>
                  Contact
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>Information</span>
              </h3>
              <span className={styles['text12']}>
                Fill up the form and our Team will get back to you within 24
                hours.
              </span>
              <div className={styles['container08']}>
                <div className={styles['container09']}>
                  <svg viewBox="0 0 1024 1024" className={styles['icon']}>
                    <path d="M742 460l-94-94q-18-18-10-44 24-72 24-152 0-18 12-30t30-12h150q18 0 30 12t12 30q0 300-213 513t-513 213q-18 0-30-12t-12-30v-150q0-18 12-30t30-12q80 0 152-24 24-10 44 10l94 94q186-96 282-282z"></path>
                  </svg>
                  <a
                    href="tel:+5551991199696"
                    className={` ${styles['link1']} ${projectStyles['small']} `}
                  >
                    +55 51 99119-9696
                  </a>
                </div>
                <div className={styles['container10']}>
                  <svg viewBox="0 0 1024 1024" className={styles['icon2']}>
                    <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
                  </svg>
                  <a
                    href="mailto:hello@creative-tim.com?subject="
                    className={` ${styles['link2']} ${projectStyles['small']} `}
                  >
                    hello@berghahn.com.br
                  </a>
                </div>
                <div className={styles['container11']}>
                  <svg viewBox="0 0 1024 1024" className={styles['icon4']}>
                    <path d="M512 490q44 0 75-31t31-75-31-75-75-31-75 31-31 75 31 75 75 31zM512 86q124 0 211 87t87 211q0 62-31 142t-75 150-87 131-73 97l-32 34q-12-14-32-37t-72-92-91-134-71-147-32-144q0-124 87-211t211-87z"></path>
                  </svg>
                  <span
                    className={` ${styles['text13']} ${projectStyles['small']} `}
                  >
                    <span>Porto Alegre, RS, Brazil</span>
                    <br></br>
                    <span>Windermere, Florida, United States</span>
                    <br></br>
                    <span>Melbourne, Australia</span>
                  </span>
                </div>
              </div>
            </div>
            <img
              alt="image"
              src="/playground_assets/wave-1.svg"
              className={styles['image1']}
            />
            <div className={styles['container12']}></div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default LandingPage
