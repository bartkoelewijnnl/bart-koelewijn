import type { AppProps } from 'next/app';
import ThemeProvider from 'providers/ThemeProvider';
import { ScreenClassProvider, setConfiguration } from 'react-grid-system';
import { BREAKPOINTS } from 'utils/breakpoint';
import '../styles/styles.scss';

const App = ({ Component, pageProps }: AppProps) => {
    setConfiguration({
        gutterWidth: 0,
        breakpoints: BREAKPOINTS,
        containerWidths: [576, 768, 922, 1152, 1152]
    });

    return (
        <ThemeProvider>
            <ScreenClassProvider>
                <Component {...pageProps} />
            </ScreenClassProvider>
        </ThemeProvider>
    );
};

export default App;
