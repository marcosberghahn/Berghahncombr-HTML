import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './primary-blue-button.module.css'

const PrimaryBlueButton = (props) => {
  return (
    <div className={styles['container']}>
      <button
        className={` ${styles['button']} ${projectStyles['button']} ${projectStyles['buttonSmall']} `}
      >
        {props.button}
      </button>
    </div>
  )
}

PrimaryBlueButton.defaultProps = {
  button: 'Button',
}

PrimaryBlueButton.propTypes = {
  button: PropTypes.string,
}

export default PrimaryBlueButton
