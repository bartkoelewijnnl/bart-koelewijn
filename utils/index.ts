import { twMerge } from 'tailwind-merge'

export const classNames = (...args: (string | { [key: string]: boolean | undefined } | undefined)[]): string => {
    return args.reduce<string>((a: string, c) => {
        if (!c) {
            return a;
        }

        // prettier-ignore
        const cn =
            typeof c === 'string'
                ? c
                : classNames(...Object.entries(c).filter(([_, value]) => value).map(([key]) => key));

        if (Boolean(cn.length)) {
            return Boolean(a.length) ? twMerge(a, cn) : cn;
        }

        return a;
    }, '');
};