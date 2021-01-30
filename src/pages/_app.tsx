import {AppProps} from 'next/app';
import '../styles/globals.css';
import '../styles/login-signup.css';

const MyApp = ({Component, pageProps}: AppProps) => {
  return (
    <Component {...pageProps} />
  );
};
export default MyApp;
