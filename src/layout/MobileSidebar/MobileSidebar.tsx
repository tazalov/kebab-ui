import { ComponentPropsWithoutRef, ElementType, PropsWithChildren, ReactNode } from 'react'

import clsx from 'clsx'

import s from './MobileSidebar.module.scss'

import { PolymorphComponentProps } from '../../types/polymorph'

export type MobileSidebarEl = {
  activeIcon?: ReactNode
  icon?: ReactNode
}

export type RootMobileProps = PropsWithChildren & ComponentPropsWithoutRef<'nav'>

const Root = ({ children, className, ...rest }: RootMobileProps) => {
  return (
    <nav className={clsx(s.sidebar, className)} {...rest}>
      {children}
    </nav>
  )
}

export type MobileListProps = PropsWithChildren & ComponentPropsWithoutRef<'ul'>

const List = ({ children, className, ...rest }: MobileListProps) => {
  return (
    <ul className={clsx(s.list, className)} {...rest}>
      {children}
    </ul>
  )
}

export type MobileItemProps = PropsWithChildren & ComponentPropsWithoutRef<'li'>

const Item = ({ children, className, ...rest }: MobileItemProps) => {
  return (
    <li className={clsx(s.item, className)} {...rest}>
      {children}
    </li>
  )
}

export type CustomMobileItemContentProps = {
  className?: string
  disabled?: boolean
  isActive?: boolean
  item: MobileSidebarEl
}

export type MobileItemContentProps<T extends ElementType> = PolymorphComponentProps<
  T,
  CustomMobileItemContentProps
>

export type MobileItemContentComponent = <T extends ElementType = 'div'>(
  props: MobileItemContentProps<T>
) => ReactNode

const ItemContent: MobileItemContentComponent = ({
  asComponent,
  className,
  disabled,
  isActive,
  item,
  ...rest
}) => {
  const Component = asComponent || 'div'

  const additionalClasses = {
    [s.active]: isActive,
    [s.disabled]: disabled,
  }

  return (
    <Component
      className={clsx(s.content, additionalClasses, className)}
      disabled={disabled}
      {...rest}
    >
      {isActive ? item.activeIcon || item.icon : item.icon}
    </Component>
  )
}

export const MobileSidebar = { Item, ItemContent, List, Root }
