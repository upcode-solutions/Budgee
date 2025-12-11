import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { useThemeContext } from '@/context/ThemeContext';
import { ColorScheme } from '../../types/contexts/ContextTypes';

import { SquareButtonProps } from '../../types/components/ButtonTypes';

import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function SquareButton(props: SquareButtonProps) {

    const { colors } = useThemeContext();
    const design = styles(colors, props.size);

  return (
    <TouchableOpacity style={design.container}>
        <MaterialCommunityIcons name={props.icon} size={24} color={colors.text} />
    </TouchableOpacity>
  )
}

const styles = (colors: ColorScheme, size: number) => StyleSheet.create({
    container: {
        width: size,
        height: size,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.cardBackground,
        borderRadius: 10,
    }
})