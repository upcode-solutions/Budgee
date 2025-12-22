import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { useThemeContext } from '@/context/ThemeContext';
import { ColorScheme } from '../../types/contexts/ContextTypes';

export default function Signin() {
  const router = useRouter();

  const { colors } = useThemeContext();
  const design = styles(colors);

  return (
    <View style={design.container}>
      <Text style={{ color: colors.text }}>This is signin</Text>
      <Text onPress={() => router.push('/auth/signup')}>Go to signup</Text>
    </View>
  );
}

const styles = (colors: ColorScheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.cardBackground,
    },
  });