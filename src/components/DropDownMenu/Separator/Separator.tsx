import { ComponentPropsWithoutRef } from 'react'

import * as RadixDropdown from '@radix-ui/react-dropdown-menu'
import clsx from 'clsx'

import s from './Separator.module.scss'

export type SeparatorProps = ComponentPropsWithoutRef<typeof RadixDropdown.Separator>

export const Separator = ({ className, ...rest }: SeparatorProps) => {
  return <RadixDropdown.Separator className={clsx(s.separator, className)} {...rest} />
}
