import React from 'react';
import { StyleSheet, View } from 'react-native';
 
import { useThemeContext } from '@/context/ThemeContext';
import { ColorScheme } from '../../types/ContextTypes';

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
    paddingHorizontal: 5,
    alignItems: 'center',
    gap: 20,
    backgroundColor: colors.background,
  },
})