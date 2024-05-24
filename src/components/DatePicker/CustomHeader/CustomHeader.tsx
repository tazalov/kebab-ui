import { type ReactDatePickerCustomHeaderProps } from 'react-datepicker'

import clsx from 'clsx'
import { getMonth, getYear } from 'date-fns'

import s from './CustomHeader.module.scss'

import { ArrowLeft, ArrowRight } from '../../../assets/icons'
import { Button } from '../../../components/Button'
import { Options, Select } from '../../../components/Select'

const rangeYears = (start: number, end: number): Options[] => {
  return Array.from({ length: end - start }, (_, i) => {
    const value = (start + i).toString()

    return { name: value, value: value }
  })
}

type Props = {
  monthOptions?: Options[]
  years?: number
} & Pick<
  ReactDatePickerCustomHeaderProps,
  'changeMonth' | 'changeYear' | 'date' | 'decreaseMonth' | 'increaseMonth'
>

export const CustomHeader = (props: Props) => {
  const { changeMonth, changeYear, date, decreaseMonth, increaseMonth, monthOptions, years } = props

  const yearsOptions = years
    ? rangeYears(getYear(new Date()) - years, getYear(new Date()) + 1)
    : undefined

  return (
    <div className={s.header}>
      {monthOptions && (
        <Select
          classNames={{ trigger: clsx(s.select, s.month), viewport: s.viewport }}
          onValueChange={(month: string) => changeMonth(Number(month))}
          options={monthOptions}
          pagination
          portal={false}
          value={getMonth(date).toString()}
        />
      )}
      {yearsOptions && (
        <Select
          classNames={{ trigger: clsx(s.select, s.year), viewport: s.viewport }}
          onValueChange={(year: string) => changeYear(Number(year))}
          options={yearsOptions}
          pagination
          portal={false}
          value={getYear(date).toString()}
        />
      )}
      <div className={s.buttons}>
        <Button
          className={s.button}
          onClick={decreaseMonth}
          startIcon={<ArrowLeft />}
          type="button"
          variant="text"
        />
        <Button
          className={s.button}
          onClick={increaseMonth}
          startIcon={<ArrowRight />}
          type="button"
          variant="text"
        />
      </div>
    </div>
  )
}
