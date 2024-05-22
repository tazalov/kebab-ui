import { ComponentPropsWithoutRef, ElementType, PropsWithChildren, ReactNode } from 'react'

import clsx from 'clsx'

import s from './Sidebar.module.scss'

import { PolymorphComponentProps } from '../../types/polymorph'

export type SidebarEl = {
  activeIcon?: ReactNode
  icon?: ReactNode
  showForOnlyPremium?: boolean
  title?: string
}

export type RootProps = PropsWithChildren & ComponentPropsWithoutRef<'nav'>

const Root = ({ children, className, ...rest }: RootProps) => {
  return (
    <nav className={clsx(s.sidebar, className)} {...rest}>
      {children}
    </nav>
  )
}

export type ListProps = PropsWithChildren & ComponentPropsWithoutRef<'ul'>

const List = ({ children, className, ...rest }: ListProps) => {
  return (
    <ul className={clsx(s.menu, className)} {...rest}>
      {children}
    </ul>
  )
}

export type ItemProps = {
  isLastGroupItem?: boolean
} & PropsWithChildren &
  ComponentPropsWithoutRef<'li'>

const Item = ({ children, className, isLastGroupItem, ...rest }: ItemProps) => {
  return (
    <li className={clsx(s.item, { [s.lastGroupItem]: isLastGroupItem }, className)} {...rest}>
      {children}
    </li>
  )
}

export type CustomItemContentProps = {
  className?: string
  disabled?: boolean
  isActive?: boolean
  item: SidebarEl
}

export type ItemContentProps<T extends ElementType> = PolymorphComponentProps<
  T,
  CustomItemContentProps
>

export type ItemContentComponent = <T extends ElementType = 'div'>(
  props: ItemContentProps<T>
) => ReactNode

const ItemContent: ItemContentComponent = ({
  asComponent,
  className,
  disabled,
  isActive,
  isLastGroupItem,
  item,
  ...rest
}) => {
  const Component = asComponent || 'div'

  const additionalClasses = {
    [s.active]: isActive,
    [s.disabled]: disabled,
    [s.full]: item.title && item.icon,
  }

  return (
    <Component
      className={clsx(s.content, additionalClasses, className)}
      disabled={disabled}
      {...rest}
    >
      {isActive ? item.activeIcon || item.icon : item.icon}
      <span className={s.title}>{item.title}</span>
    </Component>
  )
}

export const Sidebar = { Item, ItemContent, List, Root }
