import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './next-button.module.css'

const NextButton = (props) => {
  return (
    <div className={styles['container']}>
      <button className={` ${styles['button']} ${projectStyles['button']} `}>
        <span className={styles['text']}>{props.button}</span>
        <svg viewBox="0 0 1024 1024" className={styles['icon']}>
          <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
        </svg>
      </button>
    </div>
  )
}

NextButton.defaultProps = {
  button: 'Button',
}

NextButton.propTypes = {
  button: PropTypes.string,
}

export default NextButton
