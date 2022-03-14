import React, { useCallback, useEffect, useRef, useState } from 'react'
import styles from './App.module.css'
import PostValue from './components/PostValue'
import CreatePost from './components/CreatePost'
import { LS } from './utilits/Localstorage'

function App() {
  const [posts, setPost] = useState([])

  const createForm = useCallback((title) => {
    setPost(prevPosts => [...prevPosts, { id: (posts[posts.length - 1]?.id || 0) + 1, title, body: 'value' }])
  }, [posts])

  const remove = ({ id }) => {
    setPost(posts.filter(p => p.id !== id))
  }

  useEffect(() => {
    const postsFromStorage = LS.get('list') || []
    setPost(postsFromStorage)
  }, [])

  useEffect(() => {
    LS.set('list', posts)
  }, [posts])

  return (
      <div className={styles.App}>
        <CreatePost create={createForm} />
        {posts.length
            ? <PostValue
                posts={posts}
                title={'List'}
                remove={remove}
            />
            : <div className={styles.NoListText}>Please create your own TodoLists !</div>
        }
      </div>
  )
}

export default App
