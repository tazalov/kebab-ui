import { Meta, StoryObj } from '@storybook/react'

import { Eye, EyeOff } from '../../assets/icons'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
  argTypes: {
    asComponent: {
      control: false,
      description: 'Tag name (a, p, span, Link etc.)',
    },
    children: {
      description: 'Content in button',
    },
    className: {
      control: false,
      description: 'Managing styles from the outside',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabling the button',
    },
    endIcon: {
      control: false,
      description: 'The icon at the end of the component',
    },
    ref: {
      control: false,
      description: 'Standard react ref prop',
    },
    startIcon: {
      control: false,
      description: 'The icon at the beginning of the component',
    },
    variant: {
      control: { type: 'radio' },
      description: 'Style variants',
      options: ['primary', 'secondary', 'outline', 'text'],
    },
  },
  component: Button,
  parameters: {
    docs: {
      description: {
        component:
          'The Button component is polymorphic, meaning it can be rendered as different HTML elements based on the value of the "asComponent" prop. By default, it renders as a `<button>` element, but you can also specify other HTML tags such as `<a>` to render the Button as a link or any other valid element.',
      },
    },
  },
  tags: ['autodocs'],
  title: 'Button',
}

export default meta

type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    variant: 'primary',
  },
}

export const Outline: Story = {
  args: {
    children: 'Outline Button',
    variant: 'outline',
  },
}

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
  },
}

export const Text: Story = {
  args: {
    children: 'Text Button',
    variant: 'text',
  },
}

export const FullWidth: Story = {
  args: {
    children: 'Primary Button',
    fullWidth: true,
    variant: 'primary',
  },
}

export const AsLink: Story = {
  args: {
    asComponent: 'a',
    children: 'Text Button',
    href: '#',
    variant: 'text',
  },
}

export const WithIcons: Story = {
  args: {
    children: 'User',
    endIcon: <Eye />,
    startIcon: <EyeOff />,
    variant: 'secondary',
  },
}
