import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import siteConfig from '../../site.config';
import { getAllPostSlugs, getPostBySlug } from '../../lib/posts';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export default function Post({ post }) {
  return (
    <>
      <Head>
        <title>{`${post.title} - ${siteConfig.site.title}`}</title>
        <meta name="description" content={post.excerpt} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <div className="container">
        <article className="post">
          <h1>{post.title}</h1>
          <div className="post-meta">{post.dateFormatted}</div>
          <div className="markdown-content">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                code({ className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || '');
                  const isInline = !match;
                  if (!isInline) {
                    return (
                      <div className="code-block">
                        <button
                          className="code-copy-btn"
                          onClick={(e) => {
                            const text = String(children).replace(/\n$/, '');
                            navigator.clipboard.writeText(text).then(() => {
                              const btn = e.target;
                              btn.textContent = '已复制!';
                              btn.classList.add('copied');
                              setTimeout(() => {
                                btn.textContent = '复制';
                                btn.classList.remove('copied');
                              }, 1500);
                            });
                          }}
                        >
                          复制
                        </button>
                        <SyntaxHighlighter
                          style={vscDarkPlus}
                          language={match[1]}
                          PreTag="div"
                          {...props}
                        >
                          {String(children).replace(/\n$/, '')}
                        </SyntaxHighlighter>
                      </div>
                    );
                  }
                  return (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  );
                },
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        </article>
      </div>
      <Footer />
    </>
  );
}

export function getStaticPaths() {
  const slugs = getAllPostSlugs();
  return {
    paths: slugs.map((slug) => ({
      params: { slug },
    })),
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug);
  return {
    props: {
      post,
    },
  };
}
