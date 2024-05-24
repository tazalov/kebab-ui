import type { Meta, StoryObj } from '@storybook/react'

import { Arrow, Block, Eye, EyeOff, Search } from '../../assets/icons'
import { MobileSidebar, MobileSidebarEl } from './MobileSidebar'

const meta: Meta<typeof MobileSidebar.Root> = {
  argTypes: {},
  component: MobileSidebar.Root,
  parameters: {
    docs: {
      description: {
        component:
          'The MobileSidebarSidebar component in React is designed to create a dynamic and interactive sidebar navigation menu (for mobile) for web applications. This component allows users to navigate through different sections or pages easily and efficiently. It consists of `Root`, `List`, `Item`, `ItemContent (polymorph)`.',
      },
    },
  },
  tags: ['autodocs'],
  title: 'layout/MobileSidebar',
}

export default meta

type Story = StoryObj<typeof meta>

const items: MobileSidebarEl[] = [
  { icon: <Block /> },
  { icon: <Eye /> },
  { icon: <EyeOff /> },
  { icon: <Search /> },
  { icon: <Arrow /> },
]

export const Default: Story = {
  args: {},
  render: () => {
    return (
      <MobileSidebar.Root>
        <MobileSidebar.List>
          {items.map((el, i) => {
            const isActive = i === 0

            const disabled = i === 1

            return (
              <MobileSidebar.Item key={i}>
                <MobileSidebar.ItemContent disabled={disabled} isActive={isActive} item={el} />
              </MobileSidebar.Item>
            )
          })}
        </MobileSidebar.List>
      </MobileSidebar.Root>
    )
  },
}
