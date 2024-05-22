import type { Meta, StoryObj } from '@storybook/react'

import { Card } from './Card'

const meta: Meta<typeof Card> = {
  argTypes: {
    asComponent: {
      control: false,
      description: 'Tag name (div, p, form etc.)',
    },
    children: {
      description: 'Content in card',
    },
    className: {
      control: false,
      description: 'Managing styles from the outside',
    },
    ref: {
      control: false,
      description: 'Standard react ref prop',
    },
  },
  component: Card,
  parameters: {
    docs: {
      description: {
        component:
          'The Card component serves as a simple wrapper for creating card-like UI elements in React. It allows for easy styling customization through the provided className prop.',
      },
    },
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Card',
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Card content',
  },
  render: args => <Card style={{ padding: 50, textAlign: 'center', width: 300 }} {...args} />,
}
