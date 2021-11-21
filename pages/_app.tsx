import { Global } from '@emotion/react';
import type { AppProps } from 'next/app';
import ThemeProvider from 'providers/ThemeProvider';
import { ScreenClassProvider, setConfiguration } from 'react-grid-system';
import styles from '../styles/styles';
import { AnimatePresence } from 'framer-motion';

const App = ({ Component, pageProps }: AppProps) => {
    setConfiguration({
        gutterWidth: 0,
        containerWidths: [540, 740, 922, 1152, 1152]
    });

    return (
        <ThemeProvider>
            <ScreenClassProvider>
                <Global styles={styles} />
                <Component {...pageProps} />
            </ScreenClassProvider>
        </ThemeProvider>
    );
};

export default App;
