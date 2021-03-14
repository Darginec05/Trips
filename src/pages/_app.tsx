/* eslint-disable max-len */
import { AppProps } from 'next/dist/next-server/lib/router/router';
import Head from 'next/head';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ThemeProvider } from 'styled-components';
import { Container } from '../components/Container';
import { MenuProvider } from '../components/Menu/context';
import { queryClient } from '../config/reactQuery';
import '../styles/global.css';
import { theme } from '../styles/theme';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=5, viewport-fit=cover"
        />
      </Head>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <ThemeProvider theme={theme}>
          <MenuProvider>
            <Container>
              <Component {...pageProps} />
            </Container>
          </MenuProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}
