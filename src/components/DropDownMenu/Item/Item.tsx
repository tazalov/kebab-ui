import { ComponentPropsWithoutRef, ReactNode } from 'react'

import * as RadixDropdown from '@radix-ui/react-dropdown-menu'
import clsx from 'clsx'

import s from './Item.module.scss'

export type ItemProps = {
  endIcon?: ReactNode
  startIcon?: ReactNode
} & ComponentPropsWithoutRef<typeof RadixDropdown.Item>

export const Item = ({ children, className, endIcon, startIcon, ...rest }: ItemProps) => {
  return (
    <RadixDropdown.Item className={clsx(s.item, className)} {...rest}>
      {startIcon}
      {children}
      {endIcon}
    </RadixDropdown.Item>
  )
}
