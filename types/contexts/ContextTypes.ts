// Theme Context Types

type ThemeType = "light" | "dark";

interface ColorScheme {
  background: string;
  text: string;
  primary: string;
  cardBackground: string;
  cardBackgroundSecondary: string;
}

interface ControlTypes {
  children?: React.ReactNode;
  onRefresh?: () => Promise<void> | void;
}

export { ColorScheme, ControlTypes, ThemeType };

