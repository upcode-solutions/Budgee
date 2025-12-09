import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { useThemeContext } from "@/context/ThemeContext";
import { ColorScheme } from "../../types/ContextTypes";

import { TabsProps } from "../../types/components/TabsTypes";

export default function Tabs(props: TabsProps) {
  const { colors } = useThemeContext();
  const design = styles(colors);

  return (
    <View style={design.container}>
      <Text>!{props.tabName}</Text>
    </View>
  );
}

const styles = (colors: ColorScheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      minWidth: 100,
      height: "100%",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(252, 252, 252)",
      borderRadius: 10,
    },
  });
