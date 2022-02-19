import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './list-item.module.css'

const ListItem = (props) => {
  return (
    <div className={styles['container']}>
      <h5 className={` ${styles['text']} ${projectStyles['headingThree']} `}>
        {props.title}
      </h5>
      <span>{props.description}</span>
    </div>
  )
}

ListItem.defaultProps = {
  description:
    'Gain access to the demographics, psychographics, and location of unique people who are interested and talk about your brand.',
  title: '1. Listen to Social Conversations',
}

ListItem.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
}

export default ListItem
