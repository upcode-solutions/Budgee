import { useThemeContext } from "@/context/ThemeContext";
import { Stack } from "expo-router";

export default function HomeLayout() {
  const { colors } = useThemeContext();

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: "fade",
        animationDuration: 200,
        contentStyle: { backgroundColor: colors.background },
      }}
    />
  );
}
