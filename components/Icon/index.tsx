import React, { FC } from 'react';
import classNames from 'classnames';

interface IconProps {
    size?: number;
    color?: string;
    name: keyof Icons;
    className?: string;
    fill?: string;
}

export interface Icons {
    down: JSX.Element;
    apple: JSX.Element;
    android: JSX.Element;
    svg: JSX.Element;
    link: JSX.Element;
    mail: JSX.Element;
    linkedin: JSX.Element;
    transition: JSX.Element;
    slider: JSX.Element;
    css: JSX.Element;
    formik: JSX.Element;
    redux: JSX.Element;
    // Awaretrain
    awaretrain: JSX.Element;
    done: JSX.Element;
    close: JSX.Element;
    right: JSX.Element;
    again: JSX.Element;
    // Skills
    vue: JSX.Element;
    react: JSX.Element;
    flutter: JSX.Element;
    git: JSX.Element;
    strapi: JSX.Element;
}

// TODO
const icons: Icons = {
    down: (
        <path d="M 23.970703 4.9726562 A 2.0002 2.0002 0 0 0 22 7 L 22 36.171875 L 11.414062 25.585938 A 2.0002 2.0002 0 1 0 8.5859375 28.414062 L 22.585938 42.414062 A 2.0002 2.0002 0 0 0 25.414062 42.414062 L 39.414062 28.414062 A 2.0002 2.0002 0 1 0 36.585938 25.585938 L 26 36.171875 L 26 7 A 2.0002 2.0002 0 0 0 23.970703 4.9726562 z" />
    ),
    apple: (
        <path d="M32.5 44c-1.778 0-3.001-.577-4.08-1.086C27.38 42.424 26.481 42 25 42s-2.38.424-3.42.914C20.501 43.423 19.278 44 17.5 44 13.174 44 6 34.071 6 23.5 6 16.49 10.832 11 17 11c2.027 0 3.259.581 4.346 1.093C22.378 12.58 23.27 13 25 13s2.622-.42 3.654-.907C29.741 11.581 30.973 11 33 11c2.664 0 5.033.982 7.042 2.921.338.326.504.793.447 1.26s-.329.88-.735 1.116C37.438 17.644 36 20.499 36 23.75c0 3.661 2.004 6.809 4.986 7.831.391.134.709.423.879.799.171.375.18.805.023 1.188C39.461 39.515 35.424 44 32.5 44zM25.5 10c-.358 0-.708-.128-.984-.368-.363-.316-.554-.788-.51-1.269.012-.123.303-3.045 2.593-5.382l0 0c2.154-2.2 4.251-2.854 4.482-2.922.489-.142 1.017-.026 1.401.308.385.333.574.839.503 1.344-.034.241-.389 2.436-2.232 4.899-1.973 2.636-4.791 3.322-4.91 3.35C25.729 9.987 25.614 10 25.5 10z" />
    ),
    android: (
        <path d="M25.88 24L7.31 42.57C7.1 42.13 7 41.65 7 41.15V6.85c0-.5.1-.98.31-1.42L25.88 24zM28 26.12l6.21 6.21-22.05 11.9c-.52.28-1.09.42-1.66.42-.31 0-.61-.04-.91-.12L28 26.12zM28 21.88L9.6 3.48c.85-.24 1.76-.14 2.56.29l22.05 11.9L28 21.88zM45.79 24c0 1.29-.71 2.47-1.84 3.08l-6.98 3.77L30.12 24l6.85-6.85 6.98 3.77C45.08 21.53 45.79 22.71 45.79 24z" />
    ),
    svg: (
        <path d="M 20.5 10 C 19.671 10 19 10.672 19 11.5 L 19 13 L 7.6601562 13 A 3.5 3.5 0 0 0 4.5 11 A 3.5 3.5 0 1 0 4.5 18 A 3.5 3.5 0 0 0 7.6582031 16 L 14.064453 16 C 9.4673619 19.05349 6.3649008 24.159927 6.0429688 30 L 4.5 30 C 3.671 30 3 30.672 3 31.5 L 3 37.5 C 3 38.328 3.671 39 4.5 39 L 10.5 39 C 11.329 39 12 38.328 12 37.5 L 12 31.5 C 12 30.672 11.329 30 10.5 30 L 9.0429688 30 C 9.4445714 23.896499 13.478243 18.812642 19 16.861328 L 19 18.5 C 19 19.328 19.671 20 20.5 20 L 27.5 20 C 28.329 20 29 19.328 29 18.5 L 29 16.867188 C 34.520474 18.818867 38.555461 23.898061 38.957031 30 L 37.5 30 C 36.671 30 36 30.672 36 31.5 L 36 37.5 C 36 38.328 36.671 39 37.5 39 L 43.5 39 C 44.329 39 45 38.328 45 37.5 L 45 31.5 C 45 30.672 44.329 30 43.5 30 L 41.957031 30 C 41.635069 24.158539 38.529072 19.053208 33.929688 16 L 40.339844 16 A 3.5 3.5 0 0 0 43.5 18 A 3.5 3.5 0 1 0 43.5 11 A 3.5 3.5 0 0 0 40.341797 13 L 29 13 L 29 11.5 C 29 10.672 28.329 10 27.5 10 L 20.5 10 z" />
    ),
    vue: (
        <g>
            <polygon fill="#81c784" points="23.987,17 18.734,8 2.974,8 23.987,44 45,8 29.24,8" />
            <polygon fill="#455a64" points="29.24,8 23.987,17 18.734,8 11.146,8 23.987,30 36.828,8" />
        </g>
    ),
    link: (
        <path d="M36.5,6h-25C8.467,6,6,8.468,6,11.5v25c0,3.032,2.467,5.5,5.5,5.5h25c3.033,0,5.5-2.468,5.5-5.5v-25C42,8.468,39.533,6,36.5,6z M36,24.5c0,0.828-0.671,1.5-1.5,1.5S33,25.328,33,24.5v-7.379L17.561,32.561C17.268,32.854,16.884,33,16.5,33s-0.768-0.146-1.061-0.439c-0.586-0.586-0.586-1.535,0-2.121L30.879,15H23.5c-0.829,0-1.5-0.672-1.5-1.5s0.671-1.5,1.5-1.5h11c0.829,0,1.5,0.672,1.5,1.5V24.5z" />
    ),
    mail: (
        <path d="M 10 8 C 6.86 8 4.2795313 10.42 4.0195312 13.5 L 24 24.289062 L 43.980469 13.5 C 43.720469 10.42 41.14 8 38 8 L 10 8 z M 4 16.890625 L 4 34 C 4 37.31 6.69 40 10 40 L 38 40 C 41.31 40 44 37.31 44 34 L 44 16.890625 L 24.710938 27.320312 C 24.490938 27.440312 24.25 27.5 24 27.5 C 23.75 27.5 23.509062 27.440313 23.289062 27.320312 L 4 16.890625 z" />
    ),
    linkedin: (
        <path d="M36.5,6h-25C8.468,6,6,8.468,6,11.5v25c0,3.032,2.468,5.5,5.5,5.5h25c3.032,0,5.5-2.468,5.5-5.5v-25	C42,8.468,39.532,6,36.5,6z M18,34c0,0.553-0.447,1-1,1h-3c-0.553,0-1-0.447-1-1V21c0-0.553,0.447-1,1-1h3c0.553,0,1,0.447,1,1V34z M15.5,18c-1.381,0-2.5-1.119-2.5-2.5c0-1.381,1.119-2.5,2.5-2.5s2.5,1.119,2.5,2.5C18,16.881,16.881,18,15.5,18z M35,34	c0,0.553-0.447,1-1,1h-3c-0.553,0-1-0.447-1-1v-7.5c0-1.379-1.121-2.5-2.5-2.5S25,25.121,25,26.5V34c0,0.553-0.447,1-1,1h-3	c-0.553,0-1-0.447-1-1V21c0-0.553,0.447-1,1-1h3c0.553,0,1,0.447,1,1v0.541C26.063,20.586,27.462,20,29,20c3.309,0,6,2.691,6,6V34z" />
    ),
    transition: (
        <path d="M 5.5 4 C 4.671 4 4 4.672 4 5.5 L 4 20.5 C 4 21.328 4.671 22 5.5 22 L 9.5078125 22 C 9.5548125 20.704 9.9027187 14.369719 12.136719 12.136719 C 14.370719 9.9017187 20.703 9.5548125 22 9.5078125 L 22 5.5 C 22 4.672 21.329 4 20.5 4 L 5.5 4 z M 22.25 11.5 C 22.184 11.5 15.318781 11.781781 13.550781 13.550781 C 11.782781 15.318781 11.5 22.184 11.5 22.25 C 11.5 22.316 11.782781 29.182219 13.550781 30.949219 C 14.198781 31.597219 15.546922 32.048187 17.044922 32.367188 C 17.027922 32.079188 17 31.793 17 31.5 C 17 23.505 23.505 17 31.5 17 C 31.793 17 32.079187 17.027922 32.367188 17.044922 C 32.048187 15.546922 31.596219 14.197781 30.949219 13.550781 C 29.181219 11.781781 22.316 11.5 22.25 11.5 z M 31.5 19 C 24.607 19 19 24.607 19 31.5 C 19 38.393 24.607 44 31.5 44 C 38.393 44 44 38.393 44 31.5 C 44 24.607 38.393 19 31.5 19 z" />
    ),
    slider: (
        <path d="M 32.5 5 C 30.019 5 28 7.019 28 9.5 L 28 10 L 5.5 10 A 1.50015 1.50015 0 1 0 5.5 13 L 28 13 L 28 13.5 C 28 15.981 30.019 18 32.5 18 C 34.981 18 37 15.981 37 13.5 L 37 13 L 42.5 13 A 1.50015 1.50015 0 1 0 42.5 10 L 37 10 L 37 9.5 C 37 7.019 34.981 5 32.5 5 z M 15.5 17.5 C 13.019 17.5 11 19.519 11 22 L 11 22.5 L 5.5 22.5 A 1.50015 1.50015 0 1 0 5.5 25.5 L 11 25.5 L 11 26 C 11 28.481 13.019 30.5 15.5 30.5 C 17.981 30.5 20 28.481 20 26 L 20 25.5 L 42.5 25.5 A 1.50015 1.50015 0 1 0 42.5 22.5 L 20 22.5 L 20 22 C 20 19.519 17.981 17.5 15.5 17.5 z M 30.5 30 C 28.019 30 26 32.019 26 34.5 L 26 35 L 5.5 35 A 1.50015 1.50015 0 1 0 5.5 38 L 26 38 L 26 38.5 C 26 40.981 28.019 43 30.5 43 C 32.981 43 35 40.981 35 38.5 L 35 38 L 42.5 38 A 1.50015 1.50015 0 1 0 42.5 35 L 35 35 L 35 34.5 C 35 32.019 32.981 30 30.5 30 z" />
    ),
    css: (
        <path d="M 11.5 6 C 8.467 6 6 8.467 6 11.5 L 6 15.5 C 6 18.533 8.467 21 11.5 21 L 36.5 21 C 39.533 21 42 18.533 42 15.5 L 42 15 L 42.498047 15 C 42.793092 15 42.998047 15.204955 42.998047 15.5 L 42.998047 21.777344 C 42.998047 22.036031 42.829824 22.233104 42.574219 22.271484 L 25.980469 24.759766 C 24.278074 25.015386 23 26.501343 23 28.222656 L 23 29.275391 C 21.257725 29.896577 20 31.547301 20 33.5 L 20 40.5 C 20 42.981 22.019 45 24.5 45 C 26.981 45 29 42.981 29 40.5 L 29 33.5 C 29 31.547301 27.742275 29.896577 26 29.275391 L 26 28.222656 C 26 27.963969 26.170176 27.764942 26.425781 27.726562 L 43.017578 25.238281 A 1.50015 1.50015 0 0 0 43.019531 25.238281 C 44.721926 24.982661 45.998047 23.498657 45.998047 21.777344 L 45.998047 15.5 C 45.998047 13.585045 44.413002 12 42.498047 12 L 42 12 L 42 11.5 C 42 8.467 39.533 6 36.5 6 L 11.5 6 z" />
    ),
    formik: (
        <g>
            <polygon points="28.7,1.6 8.4,13.3 13.5,16.3 33.9,4.6" />
            <polygon points="34.1,5.2 13.9,16.8 13.9,22.7 34.1,11.1" />
            <polygon points="26,16.7 13.9,23.6 13.9,29.5 26,22.6" />
            <polygon points="21.4,26 13.9,30.3 13.9,36.2 21.4,31.9" />
            <polygon points="8,19.8 13.2,22.8 13.2,16.9 8,13.9" />
            <polygon points="8.1,26.5 13.2,29.5 13.2,23.6 8.1,20.6" />
            <polygon points="8,33.6 13.2,36.6 13.2,30.3 8.1,27.3" />
            <polygon points="14.3,43.4 19.5,46.4 39.6,34.8 34.5,31.9" />
            <polygon points="34.1,25.4 13.9,37 13.9,42.9 34.1,31.3" />
            <polygon points="34.1,18.7 22,25.6 22,31.5 34.1,24.5" />
            <polygon points="34.1,12 26.6,16.3 26.6,22.2 34.1,17.9" />
            <polygon points="34.8,25.4 34.8,31.3 40,34.3 40,28.4" />
            <polygon points="40,21.6 34.8,18.7 34.8,24.6 40,27.5" />
            <polygon points="40,14.7 34.8,11.7 34.8,17.9 40,20.8" />
        </g>
    ),
    awaretrain: (
        <g>
            <path d="M26.7,29.2l-1.5-5.8c1.2-0.7,1.7-2.2,1-3.5c-0.7-1.2-2.2-1.7-3.4-1c-1.2,0.7-1.7,2.2-1,3.5c0.2,0.4,0.6,0.8,1,1l-1.5,5.8L26.7,29.2z" />
            <path d="M30.1,30l3.7,0l4.5,10.6H48L32.4,0H16.2L0,40.6h9.7L24,48l12.4-6.7l-0.8-2l-3.1-7.3H24v13.4v0.1l-13.5-7l3.7-8.7h3.7c-3.4-3.4-3.4-8.9-0.1-12.3c1-1,2.3-1.8,3.6-2.2l1.3-5.8h2.5l1.3,5.8c4.6,1.4,7.2,6.3,5.8,10.9C31.9,27.7,31.1,28.9,30.1,30z" />
        </g>
    ),
    done: (
        <path d="M 42.960938 8.9804688 A 2.0002 2.0002 0 0 0 41.585938 9.5859375 L 17 34.171875 L 6.4140625 23.585938 A 2.0002 2.0002 0 1 0 3.5859375 26.414062 L 15.585938 38.414062 A 2.0002 2.0002 0 0 0 18.414062 38.414062 L 44.414062 12.414062 A 2.0002 2.0002 0 0 0 42.960938 8.9804688 z" />
    ),
    close: (
        <path d="M 38.982422 6.9707031 A 2.0002 2.0002 0 0 0 37.585938 7.5859375 L 24 21.171875 L 10.414062 7.5859375 A 2.0002 2.0002 0 0 0 8.9785156 6.9804688 A 2.0002 2.0002 0 0 0 7.5859375 10.414062 L 21.171875 24 L 7.5859375 37.585938 A 2.0002 2.0002 0 1 0 10.414062 40.414062 L 24 26.828125 L 37.585938 40.414062 A 2.0002 2.0002 0 1 0 40.414062 37.585938 L 26.828125 24 L 40.414062 10.414062 A 2.0002 2.0002 0 0 0 38.982422 6.9707031 z" />
    ),
    right: (
        <path d="M41.414,22.586l-14-14c-0.781-0.781-2.047-0.781-2.828,0c-0.781,0.781-0.781,2.047,0,2.828L35.172,22H8 c-1.104,0-2,0.896-2,2s0.896,2,2,2h27.172L24.586,36.586c-0.781,0.781-0.781,2.047,0,2.828C24.977,39.805,25.488,40,26,40 s1.023-0.195,1.414-0.586l14-14C42.195,24.633,42.195,23.367,41.414,22.586z" />
    ),
    again: (
        <path d="M 25 5 C 20.658715 5 16.655581 6.5475638 13.544922 9.1152344 A 2.0002 2.0002 0 1 0 16.091797 12.199219 C 18.515138 10.198889 21.605285 9 25 9 C 32.756241 9 39 15.243759 39 23 C 39 30.756241 32.756241 37 25 37 L 24.828125 37 L 26.414062 35.414062 A 2.0002 2.0002 0 0 0 24.960938 31.980469 A 2.0002 2.0002 0 0 0 23.585938 32.585938 L 18.585938 37.585938 A 2.0002 2.0002 0 0 0 18.585938 40.414062 L 23.585938 45.414062 A 2.0002 2.0002 0 1 0 26.414062 42.585938 L 24.828125 41 L 25 41 C 34.917759 41 43 32.917759 43 23 C 43 13.082241 34.917759 5 25 5 z" />
    ),
    react: (
        <g>
            <path
                fill="#80deea"
                d="M24,34C11.1,34,1,29.6,1,24c0-5.6,10.1-10,23-10c12.9,0,23,4.4,23,10C47,29.6,36.9,34,24,34z M24,16	c-12.6,0-21,4.1-21,8c0,3.9,8.4,8,21,8s21-4.1,21-8C45,20.1,36.6,16,24,16z"
            />
            <path
                fill="#80deea"
                d="M15.1,44.6c-1,0-1.8-0.2-2.6-0.7C7.6,41.1,8.9,30.2,15.3,19l0,0c3-5.2,6.7-9.6,10.3-12.4c3.9-3,7.4-3.9,9.8-2.5c2.5,1.4,3.4,4.9,2.8,9.8c-0.6,4.6-2.6,10-5.6,15.2c-3,5.2-6.7,9.6-10.3,12.4C19.7,43.5,17.2,44.6,15.1,44.6zM32.9,5.4c-1.6,0-3.7,0.9-6,2.7c-3.4,2.7-6.9,6.9-9.8,11.9l0,0c-6.3,10.9-6.9,20.3-3.6,22.2c1.7,1,4.5,0.1,7.6-2.3c3.4-2.7,6.9-6.9,9.8-11.9c2.9-5,4.8-10.1,5.4-14.4c0.5-4-0.1-6.8-1.8-7.8C34,5.6,33.5,5.4,32.9,5.4z"
            />
            <path
                fill="#80deea"
                d="M33,44.6c-5,0-12.2-6.1-17.6-15.6C8.9,17.8,7.6,6.9,12.5,4.1l0,0C17.4,1.3,26.2,7.8,32.7,19	c3,5.2,5,10.6,5.6,15.2c0.7,4.9-0.3,8.3-2.8,9.8C34.7,44.4,33.9,44.6,33,44.6z M13.5,5.8c-3.3,1.9-2.7,11.3,3.6,22.2c6.3,10.9,14.1,16.1,17.4,14.2c1.7-1,2.3-3.8,1.8-7.8c-0.6-4.3-2.5-9.4-5.4-14.4C24.6,9.1,16.8,3.9,13.5,5.8L13.5,5.8z"
            />
            <circle cx="24" cy="24" r="4" fill="#80deea" />
        </g>
    ),
    flutter: (
        <g>
            <polygon fill="#40c4ff" points="26,4 6,24 12,30 38,4" />
            <polygon fill="#40c4ff" points="38,22 27,33 21,27 26,22" />
            <rect width="8.485" height="8.485" x="16.757" y="28.757" fill="#03a9f4" transform="rotate(-45.001 21 33)" />
            <polygon fill="#01579b" points="38,44 26,44 21,39 27,33" />
            <polygon fill="#084994" points="21,39 30,36 27,33" />
        </g>
    ),
    strapi: (
        <g>
            <path fill="#8e75ff" d="M31.9,32.6v-15.6c0-.6-.5-1-1-1h-15.6V0h31.6c.6,0,1,.4,1,1h0v31.6h-16.1Z" />
            <path
                fill="#8e75ff"
                opacity={0.4}
                d="M15.4,0v16.1H.5C.2,16.1,0,15.8,0,15.6c0-.1,0-.3.1-.4L15.4,0ZM31.9,47.5v-14.9h16.1l-15.2,15.2c-.2.2-.5.2-.7,0,0,0-.1-.2-.1-.4h0ZM15.4,16.1h16.1c.3,0,.5.2.5.5v16.1h-15.6c-.6,0-1-.4-1-1v-15.6Z"
            />
        </g>
    ),
    git: (
        <path
            fill="#F4511E"
            d="M42.2,22.1L25.9,5.8C25.4,5.3,24.7,5,24,5c0,0,0,0,0,0c-0.7,0-1.4,0.3-1.9,0.8l-3.5,3.5l4.1,4.1c0.4-0.2,0.8-0.3,1.3-0.3c1.7,0,3,1.3,3,3c0,0.5-0.1,0.9-0.3,1.3l4,4c0.4-0.2,0.8-0.3,1.3-0.3c1.7,0,3,1.3,3,3s-1.3,3-3,3c-1.7,0-3-1.3-3-3c0-0.5,0.1-0.9,0.3-1.3l-4-4c-0.1,0-0.2,0.1-0.3,0.1v10.4c1.2,0.4,2,1.5,2,2.8c0,1.7-1.3,3-3,3s-3-1.3-3-3c0-1.3,0.8-2.4,2-2.8V18.8c-1.2-0.4-2-1.5-2-2.8c0-0.5,0.1-0.9,0.3-1.3l-4.1-4.1L5.8,22.1C5.3,22.6,5,23.3,5,24c0,0.7,0.3,1.4,0.8,1.9l16.3,16.3c0,0,0,0,0,0c0.5,0.5,1.2,0.8,1.9,0.8s1.4-0.3,1.9-0.8l16.3-16.3c0.5-0.5,0.8-1.2,0.8-1.9C43,23.3,42.7,22.6,42.2,22.1z"
        />
    ),
    redux: (
        <path
            d="M33.3,33c1.8-0.2,3.1-1.7,3.1-3.5c-0.1-1.8-1.6-3.3-3.4-3.3h-0.1c-1.9,0.1-3.4,1.6-3.3,3.5
	c0.1,0.9,0.4,1.7,1,2.3c-2.1,4.1-5.3,7.1-10,9.6c-3.2,1.7-6.6,2.3-10,1.9c-2.7-0.4-4.9-1.6-6.2-3.6c-2-3-2.1-6.2-0.5-9.5
	c1.2-2.3,3-4,4.2-4.9c-0.2-0.8-0.6-2.1-0.8-3.1c-8.9,6.4-7.9,15.1-5.3,19.2c2,3.1,6.1,4.9,10.6,4.9c1.2,0,2.4-0.1,3.7-0.4
	C24,44.6,29.9,39.9,33.3,33L33.3,33z M44,25.5C39.4,20,32.5,17,24.7,17h-1c-0.5-1.1-1.7-1.8-3-1.8h-0.1c-1.9,0.1-3.4,1.6-3.3,3.5
	c0.1,1.8,1.6,3.3,3.4,3.3h0.1c1.3-0.1,2.5-0.9,3-2.1H25c4.6,0,9,1.3,13,4c3.1,2,5.3,4.6,6.5,7.8c1,2.6,1,5.1-0.1,7.2
	c-1.7,3.2-4.6,5-8.4,5c-2.4,0-4.8-0.7-6-1.3c-0.7,0.6-1.9,1.6-2.7,2.2c2.6,1.2,5.3,1.9,7.9,1.9c5.9,0,10.2-3.2,11.8-6.5
	C48.7,36.8,48.6,30.7,44,25.5L44,25.5z M13,34.1c0.1,1.8,1.6,3.3,3.4,3.3h0.1c1.9-0.1,3.4-1.6,3.3-3.5c-0.1-1.8-1.6-3.3-3.4-3.3
	h-0.1c-0.1,0-0.3,0-0.4,0.1c-2.5-4.2-3.5-8.7-3.2-13.6c0.2-3.7,1.5-6.8,3.6-9.5c1.8-2.3,5.2-3.4,7.5-3.4c6.5-0.1,9.2,7.9,9.4,11.2
	c0.8,0.2,2.1,0.6,3.1,0.9c-0.7-9.9-6.8-15-12.7-15C18,1.2,13,5.2,11,11.1c-2.8,7.8-1,15.3,2.4,21.3C13.1,32.7,12.9,33.4,13,34.1
	L13,34.1z"
        />
    )
};

const Icon: FC<IconProps> = ({ size = 1.5, color = 'primary', name, className, fill }) => {
    return (
        <svg
            className={classNames({ [`icon--${color}`]: !fill }, className)}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            style={{ flex: `0 0 ${size}rem` }}
            fill={fill}
            width={`${size}rem`}
            height={`${size}rem`}
        >
            {icons[name]}
        </svg>
    );
};

export default Icon;
