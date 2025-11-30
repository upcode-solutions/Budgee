import React, { createContext, useContext, useMemo } from 'react';

import { useColorScheme } from 'react-native';
import { dark, light } from '../assets/styles/Colors';

type ColorScheme = typeof dark;

const ThemeContext = createContext<{ colors: ColorScheme } | undefined>(undefined);

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {

    const scheme = useColorScheme();
    const colors = scheme === 'dark' ? dark : light;

    const ColorValue = useMemo(
        () => ({ colors }),
        [colors]
    );

    return <ThemeContext.Provider value={ColorValue}>{children}</ThemeContext.Provider>;
};

export const useThemeContext = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useThemeContext must be used within a ThemeProvider');
    }
    return context;
};
export default ThemeProvider;

