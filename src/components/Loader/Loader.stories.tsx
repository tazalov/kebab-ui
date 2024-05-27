import type { Meta, StoryObj } from '@storybook/react'

import { Loader } from './Loader'

const meta: Meta<typeof Loader> = {
  argTypes: {
    containerHeight: {
      control: false,
      description: 'Flag for render loader with height: `100%`',
    },
    fullHeight: {
      control: 'boolean',
      description: 'Flag for render loader with height: `100vh`',
    },
    isWhite: {
      control: 'boolean',
      description: 'Flag for render white color loader',
    },
    size: {
      control: 'number',
      description: 'Size in `px` for loader',
    },
  },
  component: Loader,
  parameters: {
    docs: {
      description: {
        component: 'Loader component',
      },
    },
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'components/Loader',
}

export default meta

type Story = StoryObj<typeof meta>

export const Dark: Story = {
  args: {},
}

export const Light: Story = {
  args: {
    isWhite: true,
  },
}
