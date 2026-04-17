import type { Preview } from '@storybook/react';
import '../src/tokens/tokens.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      toc: false,
    },
    backgrounds: {
      default: 'Light',
      values: [
        { name: 'Light', value: '#ffffff' },
        { name: 'Off-white', value: '#fafafa' },
        { name: 'Dark', value: '#191919' },
      ],
    },
    options: {
      storySort: {
        order: [
          'Guides',
          ['Introduction', 'How to Use', 'Design MCP', 'Contributing'],
          'Tokens',
          ['Colors', 'Typography', 'Spacing', 'Border Radius'],
          'Components',
        ],
      },
    },
  },
};

export default preview;
