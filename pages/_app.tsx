import { Global } from '@emotion/react';
import type { AppProps } from 'next/app';
import ThemeProvider from 'providers/ThemeProvider';
import { ScreenClassProvider, setConfiguration, ScreenClassRender, ScreenClass } from 'react-grid-system';
import { BREAKPOINTS } from 'utils/breakpoint';
import styles from '../styles/styles';

const App = ({ Component, pageProps }: AppProps) => {
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

// App.getInitialProps = (ctx) => {
//     const userAgent = process.browser ? navigator.userAgent : ctx.req.headers['user-agent'];
//     console.log({ userAgent });
// };

export default App;
