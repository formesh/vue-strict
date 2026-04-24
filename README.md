# vue-strict monorepo

一个基于 pnpm workspace + Turborepo 的 Vue 3 monorepo 工程，旨在提供严谨、高效的前端开发环境。

## 🚀 技术栈

- **框架**: [Vue 3](https://vuejs.org/) + [TypeScript](https://www.typescriptlang.org/)
- **构建工具**: [Vite](https://vitejs.dev/)
- **Monorepo 管理**: [pnpm Workspace](https://pnpm.io/workspaces) + [Turborepo](https://turbo.build/)
- **UI 组件库**: [Element Plus](https://element-plus.org/)
- **状态管理**: [Pinia](https://pinia.vuejs.org/)
- **路由**: [Vue Router](https://router.vuejs.org/)
- **样式**: Sass/SCSS + [Stylelint](https://stylelint.io/)
- **测试**: [Vitest](https://vitest.dev/) + [Playwright](https://playwright.dev/)
- **代码质量**: [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/) + [Oxlint](https://oxc.rs/docs/guide/usage/linter.html) + [CSpell](https://cspell.org/)
- **提交规范**: [Commitizen](https://github.com/commitizen/cz-git) + [Commitlint](https://commitlint.js.org/) + [Husky](https://typicode.github.io/husky/)
- **版本管理**: [Volta](https://volta.sh/)

## 📂 项目结构

```text
.
├── apps/
│   └── web/                # Vue 3 应用主程序
├── packages/
│   ├── ai/                 # AI/策略相关逻辑封装
│   ├── ui/                 # 共享 UI 组件库 (Vue + TSX)
│   └── utils/              # 共享工具函数库
├── .husky/                 # Git Hooks 配置
├── .vscode/                # VSCode 编辑器配置
├── package.json            # 根项目配置及全仓脚本
├── pnpm-workspace.yaml     # pnpm workspace 配置
└── turbo.json              # Turborepo 任务流配置
```

## 📋 环境要求

- **Node.js**: >= 22.17.1
- **pnpm**: >= 10.13.1
- 推荐使用 [Volta](https://volta.sh/) 进行版本管理，确保团队开发环境一致。

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

项目支持多环境配置，主要位于 `apps/web` 目录下。复制模板文件并根据需要修改：

```powershell
# Windows (PowerShell)
Copy-Item .\apps\web\.env.local.example .\apps\web\.env.local

# Linux/macOS
cp apps/web/.env.local.example apps/web/.env.local
```

### 4. 启动开发服务器

```bash
# 启动 web 应用开发环境
pnpm dev
```

## 📝 可用脚本

### 核心命令

| 命令              | 说明                                                      |
| :---------------- | :-------------------------------------------------------- |
| `pnpm dev`        | 启动 `web` 应用的开发服务器                               |
| `pnpm build`      | 使用 Turbo 构建全仓所有应用和包                           |
| `pnpm type-check` | 运行全仓 TypeScript 类型检查                              |
| `pnpm lint`       | 运行全仓 Lint 检查（ESLint, Stylelint, Oxlint）           |
| `pnpm format`     | 格式化全仓代码                                            |
| `pnpm ci:check`   | 运行 CI 流程中的所有检查（类型检查 + Lint + 测试 + 构建） |

### 测试相关

| 命令             | 说明                               |
| :--------------- | :--------------------------------- |
| `pnpm test:unit` | 运行全仓单元测试 (Vitest)          |
| `pnpm test:e2e`  | 运行 `web` 端到端测试 (Playwright) |

### 提交代码

```bash
# 添加文件到暂存区
git add .

# 使用交互式提交工具，确保符合 Conventional Commits 规范
pnpm commit
```

## 🔍 代码质量保证

### 提交规范

项目强制执行 [Conventional Commits](https://www.conventionalcommits.org/) 规范，主要通过以下工具实现：

- **Husky**: 管理 Git Hooks（pre-commit, commit-msg）。
- **Commitlint**: 校验提交信息格式。
- **Commitizen (cz-git)**: 提供交互式提交界面。

### 代码检查

- **pre-commit**: 在提交前自动运行 Oxlint 和 Prettier 检查。
- **ci:check**: 在持续集成环境中运行全方位的代码质量检查。

## 🤝 贡献指南

1. **功能开发**:
   - 新的 UI 组件建议在 `packages/ui` 中开发。
   - 通用工具函数建议在 `packages/utils` 中添加。
2. **分支管理**: 建议使用 `feature/xxx` 或 `fix/xxx` 命名分支。
3. **提交代码**: 请务必使用 `pnpm commit` 提交，以保证 Git Log 的清晰和规范。

## 📄 许可证

本项目采用 [MIT](LICENSE) 许可证。
