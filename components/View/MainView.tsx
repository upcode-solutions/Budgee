import React from 'react';
import { StyleSheet, View } from 'react-native';
 
import { useThemeContext } from '@/context/ThemeContext';
import { ColorScheme } from '../../types/contexts/ContextTypes';

export default function MainView({ children }: { children: React.ReactNode }) {

  const { colors } = useThemeContext();
  const design = styles(colors);

  return (
    <View style={design.container}>
      {children}
    </View>
  )
}

const styles = (colors: ColorScheme) => StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 20,
    gap: 10,
    backgroundColor: colors.background,
  },
})