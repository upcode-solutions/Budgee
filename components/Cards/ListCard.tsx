import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { useThemeContext } from "../../context/ThemeContext";
import { ColorScheme } from "../../types/ThemeTypes";

export default function ListItemView({ items }: { items: { label: string; price: number } }) {

  const { colors } = useThemeContext();

  const design = styles(colors);

  return (
    <View style={design.container}>
      <View style={design.labalContainer}>
        <Text style={design.labelText}>{items.label}</Text>
      </View>
      <View style={design.priceContainer}>
        <Text style={design.priceText}>PHP</Text>
        <Text style={design.priceText}>{items.price}.00</Text>
      </View>
      {/* <Text style={{ color: colors.background, fontSize: 16 }}>{items.label} - ${items.price}</Text> */}
    </View>
  );
}

const styles = (colors: ColorScheme) => StyleSheet.create({
  container: {
    width: '90%',
    height: 80,
    backgroundColor: "rgba(226, 177, 0, 1)",
    borderRadius: 5,
    overflow: 'hidden',
  },
  labalContainer: {
    width: '100%',
    backgroundColor: "rgba(213, 167, 0, 1)",
    fontSize: 16,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  labelText: {
    color: colors.background,
    fontSize: 14,
    textTransform: 'uppercase',
  },
  priceContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  priceText: {
    color: colors.background,
    fontSize: 22,
  },
});
