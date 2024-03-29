export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

import { muiTheme } from 'storybook-addon-material-ui'

import { theme } from '../styles/theme'

export const decorators = [
	muiTheme(theme)
];