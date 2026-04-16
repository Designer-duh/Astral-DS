import { addons } from '@storybook/manager-api';
import astralTheme from './astral-theme';

addons.setConfig({
  theme: astralTheme,
  sidebar: {
    showRoots: true,
    collapsedRoots: [],
  },
  toolbar: {
    zoom: { hidden: false },
    eject: { hidden: false },
    copy: { hidden: false },
    fullscreen: { hidden: false },
  },
});
