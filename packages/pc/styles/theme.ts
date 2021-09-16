import { unstable_createMuiStrictModeTheme as createTheme } from '@material-ui/core/styles';

export const theme = createTheme({
  typography: {
    button: {
      textTransform: 'none',
    },
  },
});
