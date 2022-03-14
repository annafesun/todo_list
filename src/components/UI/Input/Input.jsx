import React from 'react'
import styles from './MyInp.module.css'

const Input = (props) => {
  return (
      <input className={styles.myInp} {...props} />
  )
}

export default Input