# vue-strict monorepo

一个基于 pnpm workspace + Turborepo 的 Vue 3 monorepo 工程。

## 🚀 技术栈

- **框架**: Vue 3 + TypeScript
- **构建工具**: Vite (Rolldown)
- **状态管理**: Pinia
- **路由**: Vue Router
- **样式**: Sass/SCSS
- **测试**: Vitest + Playwright
- **代码质量**: ESLint + Prettier + Stylelint + Oxlint
- **提交规范**: Commitizen + Commitlint + Husky
- **版本管理**: Volta + pnpm

## 📋 环境要求

- Node.js: >= 22.17.1
- pnpm: >= 10.13.1
- 推荐使用 [Volta](https://volta.sh/) 进行版本管理

## 🛠️ 开发环境设置

### 1. 克隆项目

```bash
git clone <repository-url>
cd vue-strict
```

### 2. 安装依赖

```bash
pnpm install
```

### 3. 环境变量配置

复制环境变量模板文件：

```bash
cp .env.local.example .env.local
```

根据需要修改 `.env.local` 中的配置。

### 4. 启动开发服务器

```bash
pnpm dev
```

## 📝 可用脚本

### 开发相关

```bash
# 启动 web 应用
pnpm dev

# 构建全部包和应用
pnpm build

# 预览 web 应用
pnpm preview

# 类型检查（全仓）
pnpm type-check
```

### 测试相关

```bash
# 运行 web 单元测试
pnpm test:unit

# 运行 web 端到端测试
pnpm test:e2e
```

### 代码质量

```bash
# 运行全仓代码检查
pnpm lint

# web 包代码格式化
pnpm format
```

### 提交代码

```bash
# 添加文件到暂存区
git add .

# 使用交互式提交
pnpm commit
```

## 🔧 环境变量

项目支持多环境配置：

- `.env` - 通用配置
- `.env.development` - 开发环境配置
- `.env.production` - 生产环境配置
- `.env.local` - 本地个人配置（不会被提交）

### 主要环境变量

```bash
# 应用配置
VITE_APP_TITLE=Vue Strict          # 应用标题
VITE_API_BASE_URL=http://localhost:3000/api  # API 基础URL
VITE_APP_VERSION=1.0.0             # 应用版本

# 功能开关
VITE_USE_MOCK=false                # 是否使用 Mock 数据
VITE_USE_PWA=false                 # 是否启用 PWA
VITE_DROP_CONSOLE=false            # 是否移除 console

# 开发配置
VITE_PORT=5173                     # 开发服务器端口
VITE_OPEN=true                     # 是否自动打开浏览器
VITE_HMR=true                      # 是否启用热更新
```

## 🏗️ 项目结构

```
vue-strict/
├── .husky/                    # Git hooks
├── apps/
│   └── web/                   # Vue3 主应用
│       ├── src/
│       ├── public/
│       ├── e2e/
│       ├── package.json
│       └── vite.config.ts
├── packages/
│   ├── utils/                 # 工具函数包
│   ├── ai/                    # AI/策略逻辑包
│   └── ui/                    # 可复用 UI 逻辑包
├── package.json               # monorepo 根配置
├── pnpm-workspace.yaml
├── turbo.json
└── tsconfig.base.json
```

## 🔍 代码质量保证

### 代码检查工具

- **ESLint**: JavaScript/TypeScript 代码检查
- **Stylelint**: CSS/SCSS 样式检查
- **Oxlint**: 高性能代码检查
- **Prettier**: 代码格式化
- **Turborepo**: 任务调度与缓存

### Git Hooks

- **pre-commit**: 提交前运行代码检查和格式化
- **commit-msg**: 验证提交信息格式

### 提交规范

使用 [Conventional Commits](https://www.conventionalcommits.org/) 规范：

```
type(scope): description

[optional body]

[optional footer]
```

常用类型：
- `feat`: 新功能
- `fix`: 修复bug
- `docs`: 文档更新
- `style`: 代码格式调整
- `refactor`: 代码重构
- `test`: 测试相关
- `chore`: 构建过程或辅助工具的变动

## 🚀 部署

### 构建生产版本

```bash
pnpm build
```

构建产物将生成在 `dist` 目录中。

### 预览构建结果

```bash
pnpm preview
```

## 🤝 贡献指南

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`pnpm commit`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 创建 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🙏 致谢

- [Vue.js](https://vuejs.org/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Pinia](https://pinia.vuejs.org/)
- [Vue Router](https://router.vuejs.org/)
