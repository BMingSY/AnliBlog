import siteConfig from '../site.config';

export default function Footer() {
  const { icpBeian, footer } = siteConfig;

  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} {footer.copyrightText}</p>
        {icpBeian && (
          <p className="icp-beian">
            <a
              href="https://beian.miit.gov.cn/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {icpBeian}
            </a>
          </p>
        )}
        {footer.showPoweredBy && (
          <p className="powered-by">Powered by Next.js</p>
        )}
      </div>
    </footer>
  );
}
