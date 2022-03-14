import React from 'react'
import styles from './MyBtn.module.css'

const Button = ({ children, ...props }) => {
  return (
      <button {...props} className={styles.my_btn}>
        {children}
      </button>
  )
}

export default Button