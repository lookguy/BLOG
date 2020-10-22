import styles from '../styles/Home.module.css'
import Link from 'next/link'

import { getSortedPostsData } from '../lib/posts'

export default function Home(props) {
  let { allPostsData } = props
  return (
    <div className={styles.container}>
      Learn <Link href="/posts/first-post">Next.js!</Link>
      <img src="/husky_1.jpg" alt="哈士奇" />
      <section>
        <h2>Blog</h2>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
