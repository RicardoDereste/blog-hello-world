import React from 'react'
import styles from './About.module.sass'
import PostModel from 'components/PostModel'
import photoCover from 'assets/about-background.png'
import photoAbout from 'assets/me.jpeg'

export default function About() {
  return (
    <PostModel photoCover={photoCover} title="About Me">
      <h3 className={styles.subtitle}>Hello, My name is Ricardo</h3>
      <img src={photoAbout} alt='Ricardo Dereste' className={styles.photoAbout} />

      <p className={styles.paragraph}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur consequat tellus et pellentesque.
      </p>
      <p className={styles.paragraph}>
        Proin iaculis fermentum elit, vel aliquet nibh hendrerit et. Integer imperdiet est quis vulputate scelerisque. Integer eu tempor ipsum, ut egestas mauris. Phasellus maximus placerat posuere. Curabitur et mi velit. Aenean viverra finibus magna a aliquet. Duis nisl ipsum, pellentesque in nunc in, pellentesque ultricies mi. Nunc commodo, nisi eget dignissim gravida, tortor lectus fringilla leo, ut interdum nisl odio sit amet augue. Proin lacinia nunc a ipsum vulputate, eu euismod sem suscipit.
      </p>
      <p className={styles.paragraph}>
        Quisque suscipit, ligula in scelerisque tempor, leo lacus pharetra ligula, quis malesuada felis metus id metus. Nullam et facilisis odio, id vehicula odio. Etiam dictum mi quis mollis facilisis. Fusce tristique sem sit amet turpis tempor, porta finibus ligula lacinia. Ut elementum at enim id tempus. Aenean molestie tellus ac nisi varius.
      </p>
      <p className={styles.paragraph}>
        Cras eu neque in orci tempor semper sed in nunc. Donec eget interdum urna. Maecenas ut ligula quis nibh porta ultrices. Phasellus congue iaculis est quis facilisis. Nulla facilisi.
      </p>
      <p className={styles.paragraph}>
        Vivamus erat tortor, pellentesque vitae ipsum vel, vestibulum hendrerit est. Mauris quis accumsan orci. Suspendisse vestibulum aliquet velit, a accumsan est viverra ut. Donec ut odio eros. Sed vestibulum quis mauris non condimentum. Nunc dignissim efficitur massa. Suspendisse ipsum erat, blandit at nunc nec, ultrices varius mi.
      </p>
      <p className={styles.paragraph}>
        Praesent eget dictum purus. In sed fermentum elit, sed feugiat mauris. Cras metus libero, sagittis at enim in, egestas efficitur felis. In hac habitasse platea dictumst. Nam eu tortor interdum mi pretium pharetra non porta lorem. In suscipit quam in volutpat sagittis. Maecenas a sem arcu. Aenean quis lectus mauris.
      </p>
    </PostModel>
  )
}
