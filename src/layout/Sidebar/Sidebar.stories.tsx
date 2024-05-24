import type { Meta, StoryObj } from '@storybook/react'

import { CalendarOutline, Eye, Search } from '../../assets/icons'
import { Sidebar, SidebarEl } from './Sidebar'

const meta: Meta<typeof Sidebar.Root> = {
  argTypes: {},
  component: Sidebar.Root,
  parameters: {
    docs: {
      description: {
        component:
          'The Sidebar component in React is designed to create a dynamic and interactive sidebar navigation menu for web applications. This component allows users to navigate through different sections or pages easily and efficiently. It consists of `Root`, `List`, `Item`, `ItemContent (polymorph)`.',
      },
    },
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  title: 'layout/Sidebar',
}

export default meta

type Story = StoryObj<typeof meta>

const items: SidebarEl[] = [
  { icon: <CalendarOutline />, title: 'Calendar' },
  { icon: <Eye />, title: 'Eye' },
  { title: 'EyeOff' },
  { icon: <Search />, title: 'Search' },
]

export const Default: Story = {
  args: {},
  render: () => {
    return (
      <Sidebar.Root>
        <Sidebar.List>
          {items.map((el, i) => {
            const isActive = i === 0

            const disabled = i === 1

            const isLastGroupItem = i === 2

            return (
              <Sidebar.Item isLastGroupItem={isLastGroupItem} key={i}>
                <Sidebar.ItemContent disabled={disabled} isActive={isActive} item={el} />
              </Sidebar.Item>
            )
          })}
        </Sidebar.List>
      </Sidebar.Root>
    )
  },
}
