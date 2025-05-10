/** @type {import('next').NextConfig} */
const nextConfig = {
  // 如果您想要静态导出，使用以下配置
  // output: 'export',

  // 否则，使用 standalone 输出
  output: 'standalone',

  // Cloudflare Pages 环境兼容性配置
  images: {
    unoptimized: true,
  },

  // 确保禁用需要 Node.js API 的功能
  webpack: (config: unknown) => {
    // 避免 Cloudflare Workers 不支持的 webpack 配置
    return config;
  }
}

module.exports = nextConfig
