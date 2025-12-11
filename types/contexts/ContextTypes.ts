type ThemeType = 'light' | 'dark';

interface ColorScheme {
    background: string;
    text: string;
    primary: string;

    cardBackground: string;
}

export { ColorScheme, ThemeType };

