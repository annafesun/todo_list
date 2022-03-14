import React from 'react'
import styles from '../App.module.css'
import Button from './UI/Button/Button'

const ListView = ({ post: { title, body }, number, remove, post }) => {
  return (
      <div>
        <div className={styles.list}>
          <div>
            <h6>{number} {title}</h6>
            <div>{body}</div>
          </div>
          <div>
            <Button onClick={() => remove(post)}>
              Delete
            </Button>
          </div>
        </div>
      </div>
  )
}

export default ListView