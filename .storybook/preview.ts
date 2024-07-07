import type { Preview } from '@storybook/react'
import '../src/styles/index.scss'
import { themes } from '@storybook/theming'
const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: [
          'getting-started',
          ['Installation', 'Usage', 'Styling'],
          'design-system',
          ['Colors', 'Iconography'],
          'components',
          'layout',
        ],
      },
    },
    docs: {
      theme: themes.dark,
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'Dark',
      values: [
        {
          name: 'Dark',
          value: '#000',
        },
      ],
    },
  },
}

export default preview
