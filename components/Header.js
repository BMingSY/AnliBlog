import Link from 'next/link';

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <h1>
          <Link href="/">Anli's Blog</Link>
        </h1>
        <nav className="nav">
          <Link href="/">Home</Link>
        </nav>
      </div>
    </header>
  );
}
