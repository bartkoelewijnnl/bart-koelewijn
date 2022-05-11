import { Global } from '@emotion/react';
import type { AppProps } from 'next/app';
import ThemeProvider from 'providers/ThemeProvider';
import { ScreenClassProvider, setConfiguration, ScreenClassRender, ScreenClass } from 'react-grid-system';
import { BREAKPOINTS } from 'utils/breakpoint';
import styles from '../styles/styles';
import '../styles/styles.scss';
// import variables from '../styles/variables.module.scss';

const App = ({ Component, pageProps }: AppProps) => {
    // console.log({ variables });

    setConfiguration({
        gutterWidth: 0,
        breakpoints: BREAKPOINTS,
        containerWidths: [576, 768, 922, 1152, 1152]
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
