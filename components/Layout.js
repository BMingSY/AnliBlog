import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import siteConfig from '../site.config';

export default function Layout({ children, title }) {
  const siteTitle = title || siteConfig.site.title;
  const siteDescription = siteConfig.site.description;

  return (
    <>
      <Head>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
