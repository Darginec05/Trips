import { AppProps } from 'next/dist/next-server/lib/router/router';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ThemeProvider } from 'styled-components';
import '../styles/global.css';

const queryClient = new QueryClient();

const theme = {
  main: 'mediumseagreen',
  black: '#000',
  typography: {
    colors: {
      primary: '#000',
      coolgray: '#97999B',
      carbon: '#1C252B',
      gray: '#76787B',
    },
    sizes: {
      xs: 12,
      sm: 14,
      md: 16,
      lg: 24,
    },
    lineHeight: {
      xs: 16,
      sm: 19,
      md: 21,
      lg: 32,
    },
  },
  button: {
    bg: {
      primary: '#F8D964',
      coolgray: '#F1F1F2',
      red: '#FBEBE9',
    },
    borderRadius: '10px',
    padding: '13px 20px',
  },
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
