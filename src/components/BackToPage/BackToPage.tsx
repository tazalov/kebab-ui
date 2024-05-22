import { ElementRef, forwardRef } from 'react'

import clsx from 'clsx'

import s from './BackToPage.module.scss'

import { Arrow } from '../../assets/icons'

export interface BackToPageProps {
  className?: string
  onNavigate: () => void
  title?: string
}

export const BackToPage = forwardRef<ElementRef<'button'>, BackToPageProps>(
  ({ className, onNavigate, title }, ref) => {
    return (
      <button
        className={clsx(s.root, { [s.withTitle]: !!title }, className)}
        onClick={onNavigate}
        ref={ref}
      >
        <Arrow />
        <span className={s.title}>{title}</span>
      </button>
    )
  }
)
