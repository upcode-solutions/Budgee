import React, { useRef } from "react";
import { Animated, Easing, PanResponder, StyleSheet, View } from "react-native";

import { useControlContext } from "@/context/ControlContext";
import { useThemeContext } from "@/context/ThemeContext";

import { ColorScheme, ControlTypes } from "@/types/contexts/ContextTypes";

export default function PullToRefresh({ children, onRefresh }: ControlTypes) {
  const pullY = useRef(new Animated.Value(0)).current;
  const { loading, setLoading } = useControlContext();

  const { colors } = useThemeContext();
  const design = styles({ colors, pullY });

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => !loading,
      onMoveShouldSetPanResponder: (_, gestureState) => {
        return (
          !loading && gestureState.dy > 0 && Math.abs(gestureState.dx) < 10
        );
      },
      onPanResponderMove: (_, gestureState) => {
        if (gestureState.dy > 0) {
          // soften movement a bit
          pullY.setValue(Math.min(gestureState.dy * 0.6, 120));
        }
      },
      onPanResponderRelease: async (_, gestureState) => {
        if (gestureState.dy > 100) {
          setLoading(true);
          Animated.timing(pullY, {
            toValue: 60,
            duration: 300,
            easing: Easing.out(Easing.quad),
            useNativeDriver: false,
          }).start();

          try {
            if (onRefresh) {
              await onRefresh();
            } else {
              await new Promise((r) => setTimeout(r, 2000));
            }
          } finally {
            setLoading(false);
            Animated.timing(pullY, {
              toValue: 0,
              duration: 300,
              easing: Easing.in(Easing.quad),
              useNativeDriver: false,
            }).start();
          }
        } else {
          Animated.timing(pullY, {
            toValue: 0,
            duration: 300,
            easing: Easing.in(Easing.quad),
            useNativeDriver: false,
          }).start();
        }
      },
    })
  ).current;

  return (
    <View style={{ flex: 1 }} {...panResponder.panHandlers}>
      <Animated.View style={design.container}></Animated.View>
      <View style={design.content}>{children}</View>
    </View>
  );
}

const styles = ({
  colors,
  pullY,
}: {
  colors: ColorScheme;
  pullY: Animated.Value;
}) =>
  StyleSheet.create({
    container: {
      height: pullY,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: colors.cardBackground,
    },
    content: {
      flex: 1,
      backgroundColor: colors.background,
    },
  });
