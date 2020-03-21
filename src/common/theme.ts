enum colors {
    primaryBlue = '#2484ad',
    pastelBlue = '#b0d3f0',
    blue = '#48a3ca',
    darkBlue = '#004973',
    primaryGreen = '#46b29d',
    pastelGreen = '#d1f5ea',
    white = '#fff',
    red = '#ff6465',
}

enum fontSizes {
    xs = '16px',
    s = '18px',
    m = '20px',
    l = '24px',
    xl = '32px',
}

enum fontFamilies {
    regular = 'PT Sans',
    bold = 'PT Sans Bold',
}

// TODO: Review
enum breakpoints {
    xs = '320px',
    s = '480px',
    m = '768px',
    l = '1024px',
    xl = '1980px',
}

enum spacing {
    s = '6px',
    m = '14px',
    xm = '16px',
    l = '18px',
    xxl = '30px',
}

enum shadows {
    clickableItem = `0 2px 2px 0 rgba(0, 0, 0, 0.2)`,
}

export const stylelint = {
    css: (strings: TemplateStringsArray, ...values: any[]): string =>
        strings.reduce(
            (acc: string, value: string, i: number) =>
                (acc += value + (values[i] || '')),
            ''
        ),
} as const;

export const media = {
    gte: (breakpoint: string) => (styles: string): string => `
    @media only screen and (min-width: ${breakpoint}) {
        ${styles}
    }
`,
    lte: (breakpoint: string) => (styles: string): string => `
    @media only screen and (max-width: ${breakpoint}) {
        ${styles}
    }
`,
} as const;

export const theme = {
    colors,
    breakpoints,
    fontSizes,
    fontFamilies,
    spacing,
    shadows,
} as const;

const smallText = stylelint.css`
    font-size: ${theme.fontSizes.s};
    line-height: 23px;
`;

export const typography = {
    smallText,
} as const;
