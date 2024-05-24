import { ComponentPropsWithoutRef, PropsWithChildren } from 'react'

import clsx from 'clsx'

import s from './Header.module.scss'

export type HeaderProps = { classNameContent?: string } & PropsWithChildren &
  ComponentPropsWithoutRef<'header'>

export const Header = ({ children, className, classNameContent, ...rest }: HeaderProps) => {
  return (
    <header className={clsx(s.header, className)} {...rest}>
      <div className={clsx('main_container', s.content, classNameContent)}>{children}</div>
    </header>
  )
}
