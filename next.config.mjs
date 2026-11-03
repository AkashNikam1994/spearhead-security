/** @type {import('next').NextConfig} */
const nextConfig = {
  // Self-contained server bundle for VPS deployment:
  // `npm run deploy:build` produces deploy/spearhead-security/ (see DEPLOY.md).
  output: "standalone",
  images: {
    formats: ["image/webp"],
  },
};

export default nextConfig;
