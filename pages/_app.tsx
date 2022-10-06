import type { AppProps } from 'next/app';
import { createGlobalStyle } from 'styled-components';
import { AuthProvider } from '../context/AuthTokenContext';
import '../styles/normalize.css';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Montserrat', sans-serif;
    height: 100vh;
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
