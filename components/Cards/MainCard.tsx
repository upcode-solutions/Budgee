import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { useThemeContext } from '../../context/ThemeContext';
import { ColorScheme } from '../../types/ContextTypes';

import { MainCardProps } from '../../types/CardTypes';

export default function MainCard(props: MainCardProps) {

    const { colors } = useThemeContext()
    const design = styles(colors);

  return (
    <View style={design.container}>
      <Text>MainCard</Text>
    </View>
  )
}

const styles = (colors: ColorScheme) => StyleSheet.create({
    container: {
        width: '100%',
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: colors.cardBackground,
        borderRadius: 10,
        padding: 15,
    },
})