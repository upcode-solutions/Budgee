import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { useThemeContext } from "../context/ThemeContext";

import { ColorScheme } from "../types/ThemeTypes";

import PriceModal from "../components/modals/PriceModal";

export default function Index() {
  const { colors } = useThemeContext();
  const design = styles(colors);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [value, setValue] = useState(0);

  return (
    <View style={design.container}>
      <Text>PHP {value}</Text>
      <TouchableOpacity onPress={() => setIsModalVisible(true)}>
        <Text>Show Price Modal</Text>
      </TouchableOpacity>
      <PriceModal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        price={value}
        setPrice={setValue}
      />
      <TouchableOpacity onPress={() => setValue(value + 1)}>
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
    modelBackground: {
      padding: 20,
      borderRadius: 10,
      backgroundColor: colors.background,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });