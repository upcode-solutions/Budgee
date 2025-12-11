import React from "react";
import { StyleSheet } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import { useThemeContext } from "@/context/ThemeContext";
import { ColorScheme } from "../../types/contexts/ContextTypes";

export default function MainSafeAreaView({ children }: { children: React.ReactNode }) {
  const { colors } = useThemeContext();
  const design = styles(colors);

  return <SafeAreaView style={design.container}>{children}</SafeAreaView>;
}

const styles = (colors: ColorScheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
  });
