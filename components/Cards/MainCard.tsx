import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { useThemeContext } from '../../context/ThemeContext';
import { ColorScheme } from '../../types/ThemeTypes';

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
        width: '90%',
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: 'rgba(226, 177, 0, 1)',
        borderRadius: 10,
        padding: 15,
        elevation: 5,
    },
})