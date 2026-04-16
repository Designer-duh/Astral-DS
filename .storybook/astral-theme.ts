import { create } from '@storybook/theming/create';

export default create({
  base: 'light',

  // Brand
  brandTitle: 'Astral DS',
  brandImage: '/nav-logo.svg',
  brandTarget: '_self',

  // Primary palette — pulled from the Astral logomark blue
  colorPrimary: '#0029CC',
  colorSecondary: '#0029CC',

  // App chrome
  appBg: '#ffffff',
  appContentBg: '#ffffff',
  appPreviewBg: '#fafafa',
  appBorderColor: '#eeeeee',
  appBorderRadius: 8,

  // Text
  textColor: '#191919',
  textInverseColor: '#ffffff',
  textMutedColor: '#5e5e5e',

  // Toolbar
  barTextColor: '#5e5e5e',
  barHoverColor: '#191919',
  barSelectedColor: '#0029CC',
  barBg: '#ffffff',

  // Inputs
  inputBg: '#ffffff',
  inputBorder: '#eeeeee',
  inputTextColor: '#191919',
  inputBorderRadius: 6,

  // Typography
  fontBase: '"Geist", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif',
  fontCode: '"Geist Mono", "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace',
});
