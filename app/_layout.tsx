import { Stack } from "expo-router";

import { SafeAreaView } from "react-native-safe-area-context";

import ThemeProvider from "../context/ThemeContext";

export default function RootLayout() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ThemeProvider>
        <Stack screenOptions={{ headerShown: false }} />
      </ThemeProvider>
    </SafeAreaView>
  );
}
