import '@emotion/react';
import { LibTheme } from 'some-lib';
import { Colors } from 'theme';

declare module '@emotion/react' {
    export interface Theme {
        colors: Colors;
    }
}

declare module '@emotion/react' {
    export interface Theme extends LibTheme {}
}
