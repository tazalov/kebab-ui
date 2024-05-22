import { ForwardedRef, ReactNode, forwardRef } from 'react'
import ReactDatePicker, { ReactDatePickerProps } from 'react-datepicker'

import { enUS, ru } from 'date-fns/locale'

import 'react-datepicker/dist/react-datepicker.css'
import './DatePicker.scss'

import s from './DatePicker.module.scss'

import { Options } from '../../components/Select'
import { CustomHeader } from './CustomHeader/CustomHeader'
import { CustomInput } from './CustomInput/CustomInput'

type NeedDatePickerProps =
  | 'dateFormat'
  | 'disabled'
  | 'endDate'
  | 'id'
  | 'maxDate'
  | 'onChange'
  | 'selected'
  | 'selectsRange'
  | 'startDate'

export type DatePickerProps<Range extends boolean | undefined = undefined> = {
  className?: string
  error?: ReactNode
  label?: string
  locale?: 'en' | 'ru'
  monthOptions?: Options[]
  placeholder?: string
  years?: number
} & Pick<ReactDatePickerProps<Range>, NeedDatePickerProps>

export const DatePicker = forwardRef(
  <Range extends boolean | undefined = undefined>(
    {
      dateFormat = ['dd.MM.yyyy', 'dd-MM-yyyy', 'dd/MM/yyyy'],
      error,
      label,
      locale,
      monthOptions,
      placeholder,
      years,
      ...rest
    }: DatePickerProps<Range>,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <div className={s.root}>
        <ReactDatePicker
          calendarStartDay={1}
          customInput={<CustomInput error={error} label={label} ref={ref} />}
          dateFormat={dateFormat}
          locale={locale === 'ru' ? ru : enUS}
          placeholderText={placeholder}
          popperPlacement="top-start"
          renderCustomHeader={({ changeMonth, changeYear, date, decreaseMonth, increaseMonth }) => (
            <CustomHeader
              changeMonth={changeMonth}
              changeYear={changeYear}
              date={date}
              decreaseMonth={decreaseMonth}
              increaseMonth={increaseMonth}
              monthOptions={monthOptions}
              years={years}
            />
          )}
          {...rest}
          autoComplete="off"
        />
      </div>
    )
  }
)
