import { Stack } from "expo-router";

import MainSafeAreaView from "@/components/Views/MainSafeAreaView";

import ControlProvider from "../context/ControlContext";
import ThemeProvider from "../context/ThemeContext";

export default function RootLayout() {
  return (
    <ControlProvider>
      <ThemeProvider>
        <MainSafeAreaView>
          <Stack screenOptions={{ headerShown: false }} />
        </MainSafeAreaView>
      </ThemeProvider>
    </ControlProvider>
  );
}
