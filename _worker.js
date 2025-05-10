export default {
  async fetch(request, env) {
    const url = new URL(request.url); // 创建了 url 对象但未使用
    const response = await fetch(request); // 直接传递了原始请求
    return response;
  },
};
// 这个代码是一个 Cloudflare Worker 的示例，它会将请求转发到原始请求的 URL，并返回响应。
