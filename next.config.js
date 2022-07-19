/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

const images = {
  domains: ["links.papareact.com", "image.tmdb.org"],
};
module.exports = { nextConfig, images };
