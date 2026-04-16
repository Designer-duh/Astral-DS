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
      toc: {
        contentsSelector: '.sbdocs-content',
        headingSelector: 'h1, h2, h3',
        ignoreSelector: '#primary',
        title: 'On this page',
        disable: false,
        unsafeTocbotOptions: {
          orderedList: false,
        },
      },
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
          ['Introduction', 'How to Use', 'How to Maintain', 'Contributing'],
          'Tokens',
          ['Colors', 'Typography', 'Border Radius'],
          'Components',
        ],
      },
    },
  },
};

export default preview;
