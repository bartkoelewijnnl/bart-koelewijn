import { Global, ThemeProvider } from '@emotion/react';
import type { AppProps } from 'next/app';
import { ScreenClassProvider, setConfiguration } from 'react-grid-system';
import theme from 'theme';
import styles from './styles';

const App = ({ Component, pageProps }: AppProps) => {
    setConfiguration({
        gutterWidth: 0,
        containerWidths: [540, 740, 960, 1152, 1152]
    });

    return (
        <ThemeProvider theme={theme}>
            <ScreenClassProvider>
                <Global styles={styles} />
                <Component {...pageProps} />
            </ScreenClassProvider>
        </ThemeProvider>
    );
};

export default App;
