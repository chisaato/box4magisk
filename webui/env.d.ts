/// <reference types="vite/client" />

declare module 'kernelsu' {
  // 选项接口
  interface ExecOptions {
    [key: string]: unknown
  }

  interface SpawnOptions {
    [key: string]: unknown
  }

  // Stdio 类，用于处理标准输入输出流
  class Stdio {
    on(event: 'data', callback: (data: string) => void): void
    on(event: string, callback: (...args: unknown[]) => void): void
    emit(event: string, ...args: unknown[]): void
  }

  // ChildProcess 类，用于表示子进程
  class ChildProcess {
    stdin: Stdio
    stdout: Stdio
    stderr: Stdio
    on(event: 'data', callback: (data: string) => void): void
    on(event: 'exit', callback: (code: number) => void): void
    on(event: 'error', callback: (error: Error) => void): void
    on(event: string, callback: (...args: unknown[]) => void): void
    emit(event: string, ...args: unknown[]): void
  }

  // exec 函数：执行命令并返回 Promise
  export function exec(
    command: string,
    options?: ExecOptions,
  ): Promise<{
    errno: number
    stdout: string
    stderr: string
  }>

  // spawn 函数：创建子进程
  export function spawn(
    command: string,
    args?: string[] | SpawnOptions,
    options?: SpawnOptions,
  ): ChildProcess

  // fullScreen 函数：控制全屏显示
  export function fullScreen(isFullScreen: boolean): void

  // toast 函数：显示提示消息
  export function toast(message: string): void
}
