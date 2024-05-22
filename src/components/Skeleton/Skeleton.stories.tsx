import type { Meta, StoryObj } from '@storybook/react'

import { Skeleton } from './Skeleton'

const meta: Meta<typeof Skeleton> = {
  argTypes: {
    border: {
      control: 'number',
      description: 'Border radius skeleton, number - px, string - percents',
    },
    className: {
      control: false,
      description: 'Managing styles from the outside',
    },
    height: {
      control: 'number',
      description: 'Height skeleton, number - px, string - percents',
    },
    width: {
      control: 'number',
      description: 'Width skeleton, number - px, string - percents',
    },
  },
  component: Skeleton,
  parameters: {
    docs: {
      description: {
        component:
          'UI element that displays a placeholder preview of content before it is loaded, creating anticipation and reducing cognitive load, and can be customized with various props and themes to match the style of the application.',
      },
    },
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  title: 'Skeleton',
}

export default meta

type Story = StoryObj<typeof meta>

export const FullWidth: Story = {
  args: {
    height: 200,
    width: '100%',
  },
}

export const Circle: Story = {
  args: {
    border: '50%',
    height: '100px',
    width: '100px',
  },
  parameters: {
    layout: 'centered',
  },
}
