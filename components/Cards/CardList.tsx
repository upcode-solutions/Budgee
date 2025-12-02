import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { useThemeContext } from "../../context/ThemeContext";
import { ColorScheme } from "../../types/ThemeTypes";

export default function ListItemView({ items }: { items: { label: string; price: number } }) {

  const { colors } = useThemeContext();

  const design = styles(colors);

  return (
    <View style={design.container}>
      <Text style={{ color: colors.background, fontSize: 16 }}>{items.label} - ${items.price}</Text>
    </View>
  );
}

const styles = (colors: ColorScheme) => StyleSheet.create({
  container: {
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 5,
    padding: 10,
    backgroundColor: colors.text,
  },
});
