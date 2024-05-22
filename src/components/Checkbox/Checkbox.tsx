import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef } from 'react'

import * as CheckboxRadix from '@radix-ui/react-checkbox'
import clsx from 'clsx'

import s from './Checkbox.module.scss'

import { Check } from '../../assets/icons'

export type CheckboxProps = {
  label?: ReactNode | string
} & ComponentPropsWithoutRef<typeof CheckboxRadix.Root>

export const Checkbox = forwardRef<ElementRef<typeof CheckboxRadix.Root>, CheckboxProps>(
  ({ className, disabled, label, ...rest }, ref) => {
    return (
      <div className={s.container}>
        <label className={clsx(s.label, { [s.disabled]: disabled }, className)}>
          <CheckboxRadix.Root className={s.checkbox} disabled={disabled} ref={ref} {...rest}>
            <CheckboxRadix.Indicator className={s.indicator}>
              <Check className={disabled ? s.checkIconDisabled : s.checkIcon} />
            </CheckboxRadix.Indicator>
          </CheckboxRadix.Root>
          {label}
        </label>
      </div>
    )
  }
)
