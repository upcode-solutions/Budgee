// Theme Context Types

type ThemeType = "light" | "dark";

interface ColorScheme {
  background: string;
  text: string;
  primary: string;
  cardBackground: string;
  cardBackgroundSecondary: string;
}

type ControlContextType = {
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

interface ControlTypes {
  children?: React.ReactNode;
  onRefresh?: () => Promise<void> | void;
}

export { ColorScheme, ControlContextType, ControlTypes, ThemeType };

