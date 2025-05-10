import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'standalone',
  // 如果需要支持 Cloudflare Workers 环境
  experimental: {
    webVitalsAttribution: ['CLS', 'LCP']
  }
};

export default nextConfig;
