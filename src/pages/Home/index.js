import React from 'react'
import styles from './Home.module.sass'
import posts from 'json/posts.json'
import PostCard from 'components/PostCard'

export default function Home() {
  return (
    <ul className={styles.posts}>
      {posts.map((post) => (
        <li key={post.id}>
          <PostCard post={post} />
        </li>
      ))}
    </ul>
  )
}
