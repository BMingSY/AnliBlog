import Link from 'next/link';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Profile from '../components/Profile';
import siteConfig from '../site.config';
import { getAllPosts } from '../lib/posts';

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>{siteConfig.site.title}</title>
        <meta name="description" content={siteConfig.site.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <div className="home-layout">
        <aside className="home-sidebar">
          <Profile />
        </aside>
        <main className="home-main">
          <div className="post-list">
          {posts.map((post) => (
            <article key={post.slug} className="post-item">
              <h2>
                <Link href={`/posts/${post.slug}`}>{post.title}</Link>
              </h2>
              <div className="post-meta">
                {post.dateFormatted}
              </div>
              <p className="post-excerpt">{post.excerpt}</p>
            </article>
          ))}
        </div>
        </main>
      </div>
      <Footer />
    </>
  );
}

export function getStaticProps() {
  const posts = getAllPosts();
  return {
    props: {
      posts,
    },
  };
}
