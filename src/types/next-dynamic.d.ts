declare module 'next/dynamic' {
  import { ComponentType } from 'react'
  type Loader<T = any> = (props: any) => Promise<{ default: ComponentType<T> }> | Promise<ComponentType<T>>

  export interface DynamicOptions {
    ssr?: boolean
    loading?: ComponentType | (() => JSX.Element | null)
  }

  export default function dynamic<T = any>(loader: Loader<T>, options?: DynamicOptions): ComponentType<T>
}