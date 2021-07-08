module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/home',
      },
    ];
  },
  images: {
    domains: ['avatars.githubusercontent.com'],
  },
};
