import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '../../components/Button'
import { Typography } from '../../components/Typography'
import { Header } from './Header'

const meta = {
  argTypes: {
    children: {
      control: false,
      description: 'Children content for render',
    },
  },
  component: Header,
  parameters: {
    docs: {
      description: {
        component: 'A simple component for the application header.',
      },
    },
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  title: 'layout/Header',
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'space-between', width: '100%' }}>
        <Typography color="primary" variant="large">
          Inctagram
        </Typography>
        <Button>Some actions</Button>
      </div>
    ),
  },
}
