import { Theme, ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { createContext, FC, useContext, useEffect, useState } from 'react';
import { ThemeLight, ThemeDark } from 'theme';

const KEY_LIGHT = 'light';
const KEY_DARK = 'dark';

const getInitialTheme = (): boolean => {
    if (typeof window === 'undefined') {
        return false;
    }

    const themePreference = window.localStorage.getItem('theme');

    // If the user has explicitly chosen light or dark, let's use it.
    // Otherwise, this value will be null.
    if (typeof themePreference === 'string' && (themePreference === KEY_LIGHT || themePreference === KEY_DARK)) {
        return themePreference === KEY_DARK;
    }

    // If they haven't been explicit, let's check the media query
    const mql = window.matchMedia('(prefers-color-scheme: dark)');

    if (typeof mql.matches === 'boolean') {
        return mql.matches;
    }

    return false;
};

// Context.
interface ThemeContextValue {
    isDark: boolean;
    setIsDark: (isDark: boolean) => void;
}

const ThemeContext = createContext<ThemeContextValue>({
    isDark: false,
    setIsDark: () => {}
});

export const useThemeContext = () => {
    return useContext(ThemeContext);
};

// Provider.
const ThemeProvider: FC = ({ children }) => {
    const [isDark, setIsDark] = useState<boolean>(getInitialTheme());

    // Methods.
    const handleOnThemeChange = (isDark: boolean) => {
        setIsDark(isDark);

        window.localStorage.setItem('theme', isDark ? KEY_DARK : KEY_LIGHT);
    };

    // Render.
    return (
        <ThemeContext.Provider value={{ isDark, setIsDark: handleOnThemeChange }}>
            {/* <EmotionThemeProvider theme={isDark ? ThemeDark : ThemeLight}>{children}</EmotionThemeProvider> */}
            <EmotionThemeProvider theme={ThemeLight}>{children}</EmotionThemeProvider>
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
