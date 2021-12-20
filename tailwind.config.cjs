module.exports = {
    content: ["./src/**/*.{html,js,svelte,ts}"],
    theme: {
        extend: {},
    },
    plugins: [
        require('daisyui')
    ],
    daisyui: {
        themes: [
            {
                'mytheme': {                          /* your theme name */
                    'primary': '#5DB85C',           /* Primary color */
                    'primary-focus': '#38543E',     /* Primary color - focused */
                    'primary-content': '#ffffff',   /* Foreground content color to use on primary color */

                    'secondary': '#195F70',         /* Secondary color */
                    'secondary-focus': '#3E578C',   /* Secondary color - focused */
                    'secondary-content': '#ffffff', /* Foreground content color to use on secondary color */

                    'accent': '#37cdbe',            /* Accent color */
                    'accent-focus': '#2aa79b',      /* Accent color - focused */
                    'accent-content': '#ffffff',    /* Foreground content color to use on accent color */

                    'neutral': '#303640',           /* Neutral color */
                    'neutral-focus': '#2a2e37',     /* Neutral color - focused */
                    'neutral-content': '#ffffff',   /* Foreground content color to use on neutral color */

                    'base-100': '#1C1E23',          /* Base color of page, used for blank backgrounds */
                    'base-200': '#f9fafb',          /* Base color, a little darker */
                    'base-300': '#d1d5db',          /* Base color, even more darker */
                    'base-content': '#FFFFFF',      /* Foreground content color to use on base color */

                    'info': '#2094f3',              /* Info */
                    'success': '#009485',           /* Success */
                    'warning': '#ff9900',           /* Warning */
                    'error': '#ff5724',             /* Error */
                },
            },
        ],
    },
}
