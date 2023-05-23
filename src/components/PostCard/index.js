import React from 'react'
import styles from './Post.module.sass'
import { Link } from 'react-router-dom'
import MainButton from 'components/MainButton'

export default function PostCard({ post }) {
  return (
    <Link to={`/posts/${post.id}`}>
      <div className={styles.post}>
        <img className={styles.cover} src={`/assets/posts/${post.id}/cover.png`} alt='Cover post' />

        <h2 className={styles.title}>{post.title}</h2>
        <MainButton>Read</MainButton>
      </div>
    </Link>
  )
}
