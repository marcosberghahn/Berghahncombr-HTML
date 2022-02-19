import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import PrimaryPinkButton from './primary-pink-button'
import styles from './header.module.css'

const Header = (props) => {
  return (
    <div data-role="Header" className={styles['Header']}>
      <nav className={styles['Nav']}>
        <div className={styles['container']}>
          <Link to="/" className={styles['navlink']}>
            <img
              alt={props.image_alt}
              src={props.image_src}
              className={styles['image']}
            />
          </Link>
          <div className={styles['container1']}>
            <div className={styles['container2']}>
              <Link to="/" className={styles['navlink1']}>
                <PrimaryPinkButton
                  button="Let's Chat"
                  className={styles['component']}
                ></PrimaryPinkButton>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

Header.defaultProps = {
  image_alt: 'image',
  image_src: '/playground_assets/logo-violet-800.svg',
}

Header.propTypes = {
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
}

export default Header
