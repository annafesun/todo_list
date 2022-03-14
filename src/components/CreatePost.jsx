import React, { useEffect, useState } from 'react'
import Input from './UI/Input/Input'
import Button from './UI/Button/Button'
import { LS } from '../utilits/Localstorage'

const CreatePost = ({ create }) => {
  const [title, setTitle] = useState('')

  const onChange = e => {
    LS.set('title', e.target.value)

    setTitle(e.target.value)
  }

  const addNewList = (e) => {
    e.preventDefault()
    create(title)

    setTitle('')
    LS.set('title', '')
    return title
  }

  useEffect(() => {
    const title = LS.get('title') || ''
    setTitle(title)
  }, [])

  return (
      <div>
        <form>
          <Input
              value={title}
              const onChange={onChange}
              type='text'
              placeholder='Create your TodoList'
          />
          <Button onClick={addNewList}>Create</Button>
        </form>
      </div>
  )
}

export default CreatePost
