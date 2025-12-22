import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { useThemeContext } from '@/context/ThemeContext';
import { ColorScheme } from '../../types/contexts/ContextTypes';

import { SquareButtonProps } from '../../types/components/ButtonTypes';

import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function SquareButton(props: SquareButtonProps) {

    const { colors } = useThemeContext();
    const design = styles(colors, props.size);
    
    if (props.isLoading) {
        return (
            <View style={design.skeletonContainer}>
            </View>
        )
    }

  return (
    <TouchableOpacity style={design.container}>
        <MaterialCommunityIcons name={props.icon} size={24} color={colors.text} />
    </TouchableOpacity>
  )
}

const styles = (colors: ColorScheme, size: number) => StyleSheet.create({
    skeletonContainer: {
        width: size,
        height: size,
        backgroundColor: colors.cardBackground,
        borderRadius: 8,
    },
    container: {
        width: size,
        height: size,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.cardBackground,
    }
})