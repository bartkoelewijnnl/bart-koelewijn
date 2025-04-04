import type { AppProps } from 'next/app';
import '../styles/styles.scss';

const App = ({ Component, pageProps }: AppProps) => {
    return <Component {...pageProps} />;
};

export default App;
