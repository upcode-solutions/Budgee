import { Stack } from "expo-router";

import MainSafeAreaView from "@/components/Views/MainSafeAreaView";

import ThemeProvider from "../context/ThemeContext";

export default function RootLayout() {
  return (
    <ThemeProvider>
      <MainSafeAreaView>
        <Stack screenOptions={{ headerShown: false }} />
      </MainSafeAreaView>
    </ThemeProvider>
  );
}
