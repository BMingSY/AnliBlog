const siteConfig = {
  // 网站基本信息
  site: {
    title: "My Blog",
    description: "A simple and clean blog",
    url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  },

  // 博主信息
  author: {
    name: 'Your Name',
    email: 'your-email@example.com',
    bio: 'Write something about yourself',
    avatar: '/avatar.png', // 头像图片路径，放在 public 目录下
  },

  // 社交媒体链接（可选）
  social: {
    github: '',
    twitter: '',
    linkedin: '',
    wechat: '',
  },

  // ICP备案信息（可选）
  // 如果服务器在中国大陆，需要填写备案号，格式如：京ICP备12345678号
  // 如果服务器在海外或不需要备案，留空即可
  icpBeian: '',

  // 导航菜单
  nav: {
    items: [
      { label: 'Home', href: '/' },
      // 可以添加更多导航链接
      // { label: 'About', href: '/about' },
      // { label: 'Archive', href: '/archive' },
    ],
  },

  // 页脚信息
  footer: {
    copyrightText: "My Blog. All rights reserved.",
    showPoweredBy: true, // 是否显示 "Powered by Next.js"
  },
};

module.exports = siteConfig;
