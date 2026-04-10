import siteConfig from '../site.config';

export default function Profile() {
  const { author, social } = siteConfig;

  return (
    <aside className="profile-card">
      {author.avatar && (
        <div className="profile-avatar-wrapper">
          <img
            src={author.avatar}
            alt={`${author.name}'s avatar`}
            className="profile-avatar"
          />
        </div>
      )}
      <h2 className="profile-name">{author.name}</h2>
      {author.bio && <p className="profile-bio">{author.bio}</p>}
      {author.email && (
        <p className="profile-email">
          <a href={`mailto:${author.email}`}>{author.email}</a>
        </p>
      )}
      <div className="profile-social">
        {social.github && (
          <a href={social.github} target="_blank" rel="noopener noreferrer" className="social-link">GitHub</a>
        )}
        {social.twitter && (
          <a href={social.twitter} target="_blank" rel="noopener noreferrer" className="social-link">Twitter</a>
        )}
        {social.wechat && (
          <span className="social-link">WeChat: {social.wechat}</span>
        )}
      </div>
    </aside>
  );
}
