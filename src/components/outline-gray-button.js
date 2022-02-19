import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './outline-gray-button.module.css'

const OutlineGrayButton = (props) => {
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

OutlineGrayButton.defaultProps = {
  button: 'Button',
}

OutlineGrayButton.propTypes = {
  button: PropTypes.string,
}

export default OutlineGrayButton
