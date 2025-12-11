import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import { useThemeContext } from "@/context/ThemeContext";
import { ColorScheme } from "../../types/contexts/ContextTypes";

import { TabsProps } from "../../types/components/TabsTypes";

export default function Tabs(props: TabsProps) {
  const { colors } = useThemeContext();
  const design = styles(colors);

  const containerStyle = [
    props.expand ? design.expandContainer : design.compactContainer,
  ];

  return (
    <TouchableOpacity
      style={containerStyle}
      activeOpacity={0.7}
      onPress={() => console.log(props.tabName)}
    >
      <Text style={design.text}>{props.tabName}</Text>
    </TouchableOpacity>
  );
}

const styles = (colors: ColorScheme) =>
  StyleSheet.create({
    expandContainer: {
      flex: 1,
      height: 45,
      paddingVertical: 0,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: colors.cardBackground,
      borderRadius: 10,
    },
    compactContainer: {
      minWidth: 100,
      height: 45,
      paddingVertical: 0,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: colors.cardBackground,
      borderRadius: 10,
    },
    text: {
      fontSize: 12,
      lineHeight: 16,
      paddingVertical: 0,
    },
  });
