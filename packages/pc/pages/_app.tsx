import '../styles/globals.css';
import 'tailwindcss/tailwind.css';

import { CssBaseline, ThemeProvider } from '@material-ui/core';
import type { AppProps } from 'next/app';
import React from 'react';
import { SWRConfig } from 'swr';

import { theme } from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    jssStyles?.parentElement?.removeChild(jssStyles);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SWRConfig
        value={{
          onError: (error, key) => {
            if (error.status !== 403 && error.status !== 404) {
              // We can send the error to Sentry,
              // or show a notification UI.
              console.log(key);
              console.error(error);
            }
          },
        }}
      >
        <Component {...pageProps} />
      </SWRConfig>
    </ThemeProvider>
  );
}
export default MyApp;
