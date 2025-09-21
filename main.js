// Deno HTTP server for Tailwind CSS Learning Dictionary
import { serve } from "https://deno.land/std@0.224.0/http/server.ts";
import { serveDir } from "https://deno.land/std@0.224.0/http/file_server.ts";

// 定义服务器端口，优先使用环境变量中的端口，否则使用默认端口 80
const PORT = parseInt(Deno.env.get("PORT") || "80");

// 读取HTML文件内容
async function loadHTMLFile(filename) {
  try {
    const content = await Deno.readTextFile(filename);
    return content;
  } catch (error) {
    console.error(`Error reading file ${filename}:`, error);
    return `<html><body><h1>Error loading ${filename}</h1></body></html>`;
  }
}

// 生成菜单页面
function generateMenu() {
  return `
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tailwind CSS v3 学习字典 - 主菜单</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px;
        }
        .menu-card {
            background: white;
            border-radius: 15px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
            padding: 30px;
            width: 100%;
            max-width: 600px;
        }
        .menu-title {
            text-align: center;
            margin-bottom: 30px;
            color: #4a5568;
        }
        .menu-item {
            display: block;
            padding: 15px 20px;
            margin-bottom: 15px;
            background: #f7fafc;
            border-radius: 10px;
            text-decoration: none;
            color: #2d3748;
            font-weight: 500;
            transition: all 0.3s ease;
            border: 1px solid #e2e8f0;
        }
        .menu-item:hover {
            background: #667eea;
            color: white;
            transform: translateY(-3px);
            box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);
        }
        .footer {
            text-align: center;
            margin-top: 30px;
            color: #718096;
            font-size: 14px;
        }
    </style>
</head>
<body>
    <div class="menu-card">
        <h1 class="menu-title text-3xl font-bold">Tailwind CSS v3 学习字典</h1>
        <p class="text-center text-gray-600 mb-8">选择要学习的模块</p>
        
        <a href="/src/tw1" class="menu-item">模块 1: 基础概念与布局</a>
        <a href="/src/tw2" class="menu-item">模块 2: 样式与视觉效果</a>
        <a href="/src/tw3" class="menu-item">模块 3: 响应式设计与组件</a>
        <a href="/src/tw4" class="menu-item">模块 4: 高级功能与交互</a>
        <a href="/src/tw5" class="menu-item">模块 5: 实战案例与应用</a>
        
        <div class="footer">
            <p>使用 Deno 部署 | Tailwind CSS v3 Jerry VIP学习资源</p>
        </div>
    </div>
</body>
</html>`;
}

// 处理HTTP请求
const handler = async (request) => {
  const url = new URL(request.url);
  const pathname = url.pathname;

  // 处理根路径请求，返回菜单页面
  if (pathname === "/") {
    return new Response(generateMenu(), {
      status: 200,
      headers: {
        "content-type": "text/html; charset=utf-8",
      },
    });
  }

  // 处理模块请求
  if (pathname.startsWith("/src/tw")) {
    const moduleNum = pathname.split("/").pop(); // 获取模块号，如 "tw1"
    const filename = `${moduleNum}.html`;
    
    try {
      const content = await loadHTMLFile(filename);
      return new Response(content, {
        status: 200,
        headers: {
          "content-type": "text/html; charset=utf-8",
        },
      });
    } catch (error) {
      return new Response(`无法加载模块: ${filename}`, {
        status: 404,
        headers: {
          "content-type": "text/html; charset=utf-8",
        },
      });
    }
  }

  // 处理静态资源请求（CSS、JS、图片等）
  if (pathname.match(/\.(css|js|png|jpg|jpeg|gif|ico)$/)) {
    return serveDir(request, {
      fsRoot: ".",
      urlRoot: "",
      showDirListing: false,
      enableCors: true,
    });
  }

  // 默认响应
  return new Response("页面未找到", {
    status: 404,
    headers: {
      "content-type": "text/html; charset=utf-8",
    },
  });
};

// 启动服务器
console.log(`Tailwind CSS 学习字典服务器运行在 http://localhost:${PORT}/`);
// serve(handler, { port: PORT });
serve(handler);