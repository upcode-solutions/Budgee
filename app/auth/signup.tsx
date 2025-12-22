import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { useThemeContext } from "@/context/ThemeContext";
import { ColorScheme } from "../../types/contexts/ContextTypes";

export default function Signup() {
  const router = useRouter();

  const { colors } = useThemeContext();
  const design = styles(colors);

  return (
    <View style={design.container}>
      <Text style={{ color: colors.text }}>This is signup</Text>
      {/* go to signin */}
      <Text onPress={() => router.push("/auth/signin")}>Go to signin</Text>
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
