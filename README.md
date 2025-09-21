# Tailwind CSS v3 十分钟入门项目
这是Tailwind CSS v3入门项目。展示Tailwind的主要功能，并帮助你在10分钟内快速上手。

## 项目结构

```
tailwind-v3-quickstart/
├── index.html
├── src/
│   └── input.css
├── dist/
│   └── output.css
├── package.json
└── README.md
```

## 代码DEMO


```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tailwind CSS v3 十分钟入门</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        primary: '#3B82F6',
                        secondary: '#10B981',
                        accent: '#F59E0B',
                    }
                }
            }
        }
    </script>
    <style>
        .custom-card {
            transition: all 0.3s ease;
        }
        .custom-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
        }
        .code-block {
            font-family: 'Courier New', monospace;
            background-color: #1F2937;
            color: #10B981;
            padding: 1rem;
            border-radius: 0.5rem;
            overflow-x: auto;
        }
    </style>
</head>
<body class="bg-gray-100 min-h-screen">
    <!-- 导航栏 -->
    <nav class="bg-white shadow-md">
        <div class="container mx-auto px-4 py-3 flex justify-between items-center">
            <div class="text-xl font-bold text-primary">TailwindCSS v3</div>
            <div class="flex space-x-4">
                <a href="#" class="text-gray-700 hover:text-primary transition-colors">首页</a>
                <a href="#" class="text-gray-700 hover:text-primary transition-colors">文档</a>
                <a href="#" class="text-gray-700 hover:text-primary transition-colors">示例</a>
                <a href="#" class="text-gray-700 hover:text-primary transition-colors">关于</a>
            </div>
        </div>
    </nav>

    <!-- 主内容区 -->
    <main class="container mx-auto px-4 py-10">
        <!-- 标题部分 -->
        <section class="text-center mb-16">
            <h1 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Tailwind CSS v3 十分钟入门</h1>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">使用实用优先的CSS框架快速构建现代网站，无需离开HTML。</p>
            <div class="mt-8 flex justify-center space-x-4">
                <button class="bg-primary hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">开始学习</button>
                <button class="border border-primary text-primary hover:bg-blue-50 font-bold py-3 px-6 rounded-lg transition-colors">查看文档</button>
            </div>
        </section>

        <!-- 特性展示 -->
        <section class="mb-16">
            <h2 class="text-3xl font-bold text-center text-gray-800 mb-12">主要特性</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- 特性1 -->
                <div class="bg-white rounded-xl shadow-md p-6 custom-card">
                    <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 text-xl mb-4">1</div>
                    <h3 class="text-xl font-semibold text-gray-800 mb-2">实用优先</h3>
                    <p class="text-gray-600">通过组合实用类来构建复杂组件，无需编写自定义CSS。</p>
                </div>
                
                <!-- 特性2 -->
                <div class="bg-white rounded-xl shadow-md p-6 custom-card">
                    <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 text-xl mb-4">2</div>
                    <h3 class="text-xl font-semibold text-gray-800 mb-2">响应式设计</h3>
                    <p class="text-gray-600">使用响应式前缀轻松构建移动优先的界面。</p>
                </div>
                
                <!-- 特性3 -->
                <div class="bg-white rounded-xl shadow-md p-6 custom-card">
                    <div class="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600 text-xl mb-4">3</div>
                    <h3 class="text-xl font-semibold text-gray-800 mb-2">悬停与焦点状态</h3>
                    <p class="text-gray-600">轻松为悬停、焦点和其他状态添加样式。</p>
                </div>
            </div>
        </section>

        <!-- 代码示例 -->
        <section class="mb-16">
            <h2 class="text-3xl font-bold text-center text-gray-800 mb-8">简单示例</h2>
            <div class="bg-white rounded-xl shadow-md p-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h3 class="text-xl font-semibold text-gray-800 mb-4">HTML代码</h3>
                        <pre class="code-block"><code>&lt;button class="
  bg-primary 
  hover:bg-blue-700 
  text-white 
  font-bold 
  py-2 px-4 
  rounded 
  transition-colors
  duration-300
  shadow-md
  hover:shadow-lg
"&gt;
  点击我
&lt;/button&gt;</code></pre>
                    </div>
                    <div>
                        <h3 class="text-xl font-semibold text-gray-800 mb-4">效果预览</h3>
                        <div class="flex items-center justify-center h-full">
                            <button class="
                                bg-primary 
                                hover:bg-blue-700 
                                text-white 
                                font-bold 
                                py-2 px-4 
                                rounded 
                                transition-colors
                                duration-300
                                shadow-md
                                hover:shadow-lg
                            ">
                                点击我
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 快速开始指南 -->
        <section class="bg-white rounded-xl shadow-md p-8 mb-16">
            <h2 class="text-3xl font-bold text-center text-gray-800 mb-8">十分钟快速入门</h2>
            
            <div class="space-y-8">
                <div class="flex items-start">
                    <div class="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">1</div>
                    <div>
                        <h3 class="text-xl font-semibold text-gray-800 mb-2">通过CDN使用</h3>
                        <p class="text-gray-600">最简单的方式是在HTML头部添加CDN链接：</p>
                        <pre class="code-block mt-2"><code>&lt;script src="https://cdn.tailwindcss.com"&gt;&lt;/script&gt;</code></pre>
                    </div>
                </div>
                
                <div class="flex items-start">
                    <div class="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">2</div>
                    <div>
                        <h3 class="text-xl font-semibold text-gray-800 mb-2">通过NPM安装</h3>
                        <p class="text-gray-600">对于正式项目，建议使用NPM安装：</p>
                        <pre class="code-block mt-2"><code>npm install -D tailwindcss
npx tailwindcss init</code></pre>
                    </div>
                </div>
                
                <div class="flex items-start">
                    <div class="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">3</div>
                    <div>
                        <h3 class="text-xl font-semibold text-gray-800 mb-2">配置模板路径</h3>
                        <p class="text-gray-600">在<code>tailwind.config.js</code>中配置模板路径：</p>
                        <pre class="code-block mt-2"><code>module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}</code></pre>
                    </div>
                </div>
                
                <div class="flex items-start">
                    <div class="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">4</div>
                    <div>
                        <h3 class="text-xl font-semibold text-gray-800 mb-2">添加Tailwind指令</h3>
                        <p class="text-gray-600">在CSS文件中添加Tailwind指令：</p>
                        <pre class="code-block mt-2"><code>@tailwind base;
@tailwind components;
@tailwind utilities;</code></pre>
                    </div>
                </div>
                
                <div class="flex items-start">
                    <div class="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">5</div>
                    <div>
                        <h3 class="text-xl font-semibold text-gray-800 mb-2">构建CSS</h3>
                        <p class="text-gray-600">运行CLI工具处理CSS：</p>
                        <pre class="code-block mt-2"><code>npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch</code></pre>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <!-- 页脚 -->
    <footer class="bg-gray-800 text-white py-12">
        <div class="container mx-auto px-4">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h3 class="text-xl font-semibold mb-4">Tailwind CSS v3</h3>
                    <p class="text-gray-400">一个实用优先的CSS框架，用于快速构建自定义用户界面。</p>
                </div>
                <div>
                    <h3 class="text-xl font-semibold mb-4">资源</h3>
                    <ul class="space-y-2">
                        <li><a href="#" class="text-gray-400 hover:text-white transition-colors">文档</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white transition-colors">组件</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white transition-colors">博客</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white transition-colors">GitHub</a></li>
                    </ul>
                </div>
                <div>
                    <h3 class="text-xl font-semibold mb-4">社区</h3>
                    <ul class="space-y-2">
                        <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Discord</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Twitter</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white transition-colors">GitHub讨论</a></li>
                    </ul>
                </div>
            </div>
            <div class="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
                <p>© 2023 Tailwind CSS v3 入门指南. 仅供学习使用.</p>
            </div>
        </div>
    </footer>
</body>
</html>
```

## 使用说明

1. 将上述代码保存为 `index.html` 文件
2. 直接在浏览器中打开该文件即可查看效果
3. 要使用完整功能（如自定义配置、构建过程），建议通过NPM安装Tailwind CSS

## NPM安装步骤

如果你需要使用完整的构建过程，请按照以下步骤操作：

1. 初始化项目并安装Tailwind CSS：
```bash
npm init -y
npm install -D tailwindcss
```

2. 创建配置文件：
```bash
npx tailwindcss init
```

3. 创建 `src/input.css` 文件并添加：
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

4. 构建CSS：
```bash
npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
```

5. 在HTML中链接生成的CSS文件：
```html
<link href="/dist/output.css" rel="stylesheet">
```

## 项目特点

- 响应式设计，适配移动设备和桌面设备
- 展示了Tailwind CSS的主要功能：实用类、响应式设计、状态变化
- 包含自定义配置示例
- 提供完整的入门指南
- 美观的UI设计，包含卡片、按钮、导航栏等组件

这个项目将帮助你在10分钟内了解Tailwind CSS v3的基本概念和使用方法。