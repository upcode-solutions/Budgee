type ThemeType = 'light' | 'dark';

interface ColorScheme {
    background: string;
    text: string;
    primary: string;

    cardBackground: string;
}

interface ControlTypes {
    controls: ControlTypes;
    setControls: React.Dispatch<React.SetStateAction<ControlTypes>>;
}

export { ColorScheme, ControlTypes, ThemeType };

