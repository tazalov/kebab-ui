import { CSSProperties } from 'react'

import clsx from 'clsx'

import s from './Skeleton.module.scss'

export interface SkeletonProps {
  border?: string
  className?: string
  height?: number | string
  width?: number | string
}

export const Skeleton = ({ border, className, height, width }: SkeletonProps) => {
  const styles: CSSProperties = {
    borderRadius: border,
    height,
    width,
  }

  return <div className={clsx(s.Skeleton, className)} style={styles} />
}
