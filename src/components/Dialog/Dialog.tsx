import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef } from 'react'

import * as RadixDialog from '@radix-ui/react-dialog'
import clsx from 'clsx'

import s from './Dialog.module.scss'

import { Close } from '../../assets/icons'
import { Typography } from '../../components/Typography'
import { DialogClose } from './DialogClose'

export type DialogProps = {
  className?: string
  classNameOverlay?: string
  customTitleComponent?: ReactNode
  title?: string
  trigger?: ReactNode
} & ComponentPropsWithoutRef<typeof RadixDialog.Root>

export const Dialog = forwardRef<ElementRef<typeof RadixDialog.Content>, DialogProps>(
  (props, ref) => {
    const { children, className, classNameOverlay, customTitleComponent, title, trigger, ...rest } =
      props

    return (
      <RadixDialog.Root {...rest}>
        {trigger && <RadixDialog.Trigger asChild>{trigger}</RadixDialog.Trigger>}
        <RadixDialog.Portal>
          <RadixDialog.Overlay className={clsx(s.overlay, classNameOverlay)} />
          <RadixDialog.Content className={clsx(s.content, className)} ref={ref}>
            {customTitleComponent ||
              (title && (
                <div className={s.title}>
                  <Typography variant="h1">{title}</Typography>
                  <DialogClose>
                    <Close className={s.closeIcon} />
                  </DialogClose>
                </div>
              ))}
            {children}
          </RadixDialog.Content>
        </RadixDialog.Portal>
      </RadixDialog.Root>
    )
  }
)
