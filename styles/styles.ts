import { css, Theme } from '@emotion/react';

const styles = (theme: Theme) => css`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html,
    body {
        font-family: 'Source Sans Pro', sans-serif;
    }

    body {
        padding: 0 24px;
        background-color: ${theme.colors.background};
    }

    input {
        font-family: inherit;
    }
`;

export default styles;
