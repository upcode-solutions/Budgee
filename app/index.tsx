import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { useThemeContext } from "../context/ThemeContext";

import { ColorScheme } from "../types/ThemeTypes";

export default function Index() {
  const { colors } = useThemeContext();
  const design = styles(colors);

  return (
    <View style={design.container}>
      <TouchableOpacity>
        <Text style={{ color: colors.text }}>
          Edit app/index.tsx to edit this screen.
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = (colors: ColorScheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: colors.background,
    },
  });
