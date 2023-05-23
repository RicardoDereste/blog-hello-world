import React from 'react'
import './Post.sass'
import styles from './Post.module.sass'
import { Route, Routes, useParams } from 'react-router-dom'
import posts from "json/posts.json"
import PostModel from 'components/PostModel'
import ReactMarkdown from 'react-markdown'
import NotFound from 'pages/NotFound'
import DefaultPage from 'components/DefaultPage'
import PostCard from 'components/PostCard'

export default function Post() {

    const parameters = useParams()

    const post = posts.find((post) => {
        return post.id === Number(parameters.id)
    })

    if (!post) {
        return <NotFound />
    }

    const postsRecommended = posts
        .filter((post) => post.id !== Number(parameters.id))
        .sort((a, b) => b.id - a.id)
        .slice(0, 4)

    return (
        <Routes>
            <Route path='*' element={<DefaultPage />}>
                <Route index element={
                    <PostModel
                        photoCover={`/assets/posts/${post.id}/cover.png`}
                        title={post.title}>

                        <div className="post-markdown-container">
                            <ReactMarkdown>
                                {post.text}
                            </ReactMarkdown>
                        </div>

                        <h2 className={styles.titleOtherPosts}>
                            Other posts you might like:
                        </h2>

                        <ul className={styles.postsRecommended}>
                            {postsRecommended.map((post) => (
                                <li key={post.id}>
                                    <PostCard post={post}/>
                                </li>
                            ))}
                        </ul>

                    </PostModel>}
                />
            </Route>
        </Routes>
    )
}
