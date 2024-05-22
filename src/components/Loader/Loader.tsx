import clsx from 'clsx'

import s from './Loader.module.scss'

import { LoaderBlack, LoaderWhite } from '../../assets/icons'

type SizeProps =
  | {
      containerHeight?: boolean
      fullHeight?: false
    }
  | {
      containerHeight?: never
      fullHeight?: true
    }

interface BaseProps {
  className?: string
  isWhite?: boolean
  size?: number
}

type Props = SizeProps & BaseProps

export const Loader = ({ className, containerHeight, fullHeight, isWhite, size }: Props) => {
  return (
    <div
      className={clsx(
        s.loader,
        {
          [s.containerHeight]: containerHeight,
          [s.fullHeight]: fullHeight,
        },
        className
      )}
    >
      {isWhite ? (
        <LoaderWhite height={size || 100} width={size || 100} />
      ) : (
        <LoaderBlack height={size || 100} width={size || 100} />
      )}
    </div>
  )
}
