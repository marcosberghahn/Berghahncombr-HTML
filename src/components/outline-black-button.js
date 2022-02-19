import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './outline-black-button.module.css'

const OutlineBlackButton = (props) => {
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

OutlineBlackButton.defaultProps = {
  button: 'Button',
}

OutlineBlackButton.propTypes = {
  button: PropTypes.string,
}

export default OutlineBlackButton
