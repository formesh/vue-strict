/// <reference types="vite/client" />

// 扩展环境变量类型定义
interface ImportMetaEnv {
  // 应用配置
  readonly VITE_APP_TITLE: string
  readonly VITE_APP_VERSION: string

  // API配置
  readonly VITE_API_BASE_URL: string

  // 功能开关
  readonly VITE_USE_MOCK: string
  readonly VITE_USE_PWA: string
  readonly VITE_SHOW_DEVTOOLS: string

  // 开发配置
  readonly VITE_PORT: string
  readonly VITE_OPEN: string
  readonly VITE_HMR: string

  // 构建配置
  readonly VITE_ROUTER_MODE: string
  readonly VITE_BUILD_GZIP: string
  readonly VITE_DROP_CONSOLE: string
  readonly VITE_SOURCEMAP: string
  readonly VITE_BUILD_ANALYZE: string

  // 日志配置
  readonly VITE_LOG_LEVEL: string

  // CDN配置
  readonly VITE_CDN_BASE_URL: string

  // 开发者配置
  readonly VITE_DEVELOPER_NAME: string

  // 数据库配置
  readonly VITE_DB_HOST: string
  readonly VITE_DB_PORT: string
  readonly VITE_DB_NAME: string

  // 第三方服务
  readonly VITE_GOOGLE_ANALYTICS_ID: string
  readonly VITE_SENTRY_DSN: string

  // 功能开关
  readonly VITE_ENABLE_FEATURE_X: string
  readonly VITE_ENABLE_DEBUG_MODE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

// 定义环境变量的类型
type EnvType = {
  [key in keyof ImportMetaEnv]: ImportMetaEnv[key]
}
