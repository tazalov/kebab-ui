import { PropsWithChildren } from 'react'

import clsx from 'clsx'

import s from './Header.module.scss'

export const Header = ({ children }: PropsWithChildren) => {
  return (
    <header className={s.header}>
      <div className={clsx('main_container', s.content)}>{children}</div>
    </header>
  )
}
