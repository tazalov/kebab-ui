/// <reference types="vite/client" />

type Nullable<T> = T | null

type Prettify<T> = {
  [K in keyof T]: T[K]
}
