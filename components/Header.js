import Link from 'next/link';
import siteConfig from '../site.config';

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <h1>
          <Link href="/">{siteConfig.site.title}</Link>
        </h1>
        <nav className="nav">
          {siteConfig.nav.items.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
