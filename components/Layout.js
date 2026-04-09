import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Layout({ children, title = 'My Blog' }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="A simple and clean blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
