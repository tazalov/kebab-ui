import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { format } from 'date-fns'

import { DatePicker } from './DatePicker'

const meta: Meta<typeof DatePicker> = {
  argTypes: {
    className: {
      control: false,
    },
    dateFormat: {
      control: false,
      description: 'Needed date format for show in input. Default `dd.MM.yyyy`',
    },
    disabled: {
      control: 'boolean',
      description: 'Standard prop',
    },
    endDate: {
      control: false,
      description: 'End date for `range mode`. Type `Date`',
    },
    error: {
      control: 'text',
      description: 'Error content',
    },
    label: {
      control: 'text',
      description: 'Text above input',
    },
    maxDate: {
      control: 'date',
      description: 'Limiter. Type `Date`',
    },
    monthOptions: {
      control: false,
      description: 'Array month (with locale) for render select',
    },
    onChange: {
      action: 'Date changed!',
      description: 'Callback for control current value.',
    },
    placeholder: {
      control: 'text',
      description: 'Standard placeholder input prop',
    },
    selected: {
      control: 'date',
      description: 'Selected date for show in input',
    },
    selectsRange: {
      control: 'boolean',
      description: 'Flag for de/activate `range mode`. Type `Date`',
    },
    startDate: {
      control: false,
      description: 'Start date for `range mode`. Type `Date`',
    },
    years: {
      control: 'number',
      description:
        'The number of years that will be displayed in Select starting from the current year',
    },
  },
  component: DatePicker,
  parameters: {
    docs: {
      description: {
        component: 'Simple Date picker. Based on `react-datepicker`',
      },
    },
  },
  tags: ['autodocs'],
  title: 'components/DatePicker',
}

export default meta

type Story = StoryObj<typeof meta>

const placeholder = 'Select you date...'

export const Default: Story = {
  args: {
    placeholder,
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder,
  },
}

export const WithLabel: Story = {
  args: {
    label: 'Date of Birth',
    placeholder,
  },
}

export const WithMaxDate: Story = {
  args: {
    maxDate: new Date(),
    placeholder,
  },
}

export const WithYearsAndMonth: Story = {
  args: {
    label: 'Date of Birth',
    monthOptions: [
      { name: 'January', value: '0' },
      { name: 'February', value: '1' },
      { name: 'March', value: '2' },
      { name: 'April', value: '3' },
      { name: 'May', value: '4' },
      { name: 'June', value: '5' },
      { name: 'July', value: '6' },
      { name: 'August', value: '7' },
      { name: 'September', value: '8' },
      { name: 'October', value: '9' },
      { name: 'November', value: '10' },
      { name: 'December', value: '11' },
    ],
    placeholder,
    years: 30,
  },
}

export const WithError: Story = {
  args: {
    error: (
      <span>
        Some error <b>occurred</b>
      </span>
    ),
    placeholder,
  },
}

export const Range: Story = {
  args: {
    endDate: new Date(2024, 2, 3),
    placeholder,
    startDate: new Date(),
  },
}

export const Controlled: Story = {
  render: () => {
    const [date, setDate] = useState<Nullable<Date>>(new Date(2024, 2, 3))
    const onChange = (date: Nullable<Date>) => {
      setDate(date)
    }

    return (
      <div>
        <span>Selected date: {date && format(date, 'dd/MM/yyyy')}</span>
        <DatePicker onChange={onChange} selected={date} />
      </div>
    )
  },
}

export const ControlledRange: Story = {
  render: () => {
    const [startDate, setStartDate] = useState<Nullable<Date>>(new Date(2024, 2, 3))
    const [endDate, setEndDate] = useState<Nullable<Date>>(new Date())
    const onChange = (dates: [Nullable<Date>, Nullable<Date>]) => {
      const [start, end] = dates

      setStartDate(start)
      setEndDate(end)
    }

    return (
      <div>
        <span>
          Selected range date: {startDate && format(startDate, 'dd/MM/yyyy')} -{' '}
          {endDate && format(endDate, 'dd/MM/yyyy')}
        </span>
        <DatePicker
          endDate={endDate}
          onChange={onChange}
          selected={startDate}
          selectsRange
          startDate={startDate}
        />
      </div>
    )
  },
}
