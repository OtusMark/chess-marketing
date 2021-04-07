import {darken, lighten} from "polished";

export type ThemeType = typeof theme;

const primaryColor = '#ed6e6e'
const secondaryColor = '#edba6e'

export const theme = {
    variable: {
        headerHeight: '10rem'
    },
    color: {
        primary: {
            main: primaryColor,
            light: `${lighten(0.1, primaryColor)}`,
            dark: `${darken(0.1, primaryColor)}`
        },
        secondary: {
            main: secondaryColor,
            light: `${lighten(0.1, secondaryColor)}`,
            dark: `${darken(0.1, secondaryColor)}`
        },
        grey: {
            100: '#f5f5f5',
            200: '#eeeeee',
            300: '#e0e0e0',
            400: '#bdbdbd',
            500: '#9e9e9e',
            600: '#757575',
            700: '#616161',
            800: '#424242',
            900: '#212121',
        },
        black: '#1a1a1a',
        white: '#e9e9e9',
        error: '#cf1313',
        gradients: {
            blackTrans: 'linear-gradient(to bottom, rgba(26, 26, 26, 1), rgba(26, 26, 26, .6))'
        }
    },
    font: {
        source: `https://fonts.googleapis.com/css2?family=Montserrat:wght@600&family=Roboto&display=swap`,
        family: {
            default: `'Roboto', sans-serif;`,
            montserrat: `'Montserrat', sans-serif;`
        },
        size: {
            s3: '0.512rem',
            s2: '0.64rem',
            s1: '0.8rem',
            defaultXL: '22px', // 4k
            defaultL: '16px', // laptop:
            defaultM: '14px', // tablet:
            defaultS: '12px', // mobile
            b1: '1.25rem',
            b2: '1.563rem',
            b3: '1.953rem',
            b4: '2.441rem',
            b5: '3.052rem'
        }
    },
    shadow: {
        0: 'none',
        1: '2px 2px 5px rgba(0,0,0,0.2)',
        2: '2px 2px 6px rgba(0,0,0,0.2)',
        3: '2px 2px 7px rgba(0,0,0,0.2)',
    },
    effect: {
        glow: `drop-shadow(0px 0px 5px ${primaryColor})`
    },
    mediaQuery: {
        mobileMax: '425px',
        tabletMax: '1024px',
        desktopMax: '1980px',
    }
};