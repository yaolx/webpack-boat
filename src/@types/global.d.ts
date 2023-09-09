declare module 'process' {
  global {
    namespace NodeJS {
      export interface ProcessEnv {
        BASE_ENV: 'development' | 'test' | 'pre' | 'product'
        NODE_ENV: 'development' | 'product'
      }
    }
  }
}

declare module '*.less' {
  const content: { [className: string]: string }
  export default content
}
