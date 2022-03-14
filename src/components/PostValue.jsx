import React from 'react'
import ListView from './ListView'

const PostValue = ({ posts, title, remove }) => {
  return (
      <div>
        <h1>{title}</h1>
        {posts.map((post, index) =>
            <ListView
                number={index + 1}
                post={post}
                key={post.id}
                remove={remove}
            />
        )}
      </div>
  )
}

export default PostValue