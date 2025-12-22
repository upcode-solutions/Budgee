import React from 'react';
import { ActivityIndicator, Animated, StyleSheet } from 'react-native';

type Props = {
  refreshing: boolean;
  pullY: Animated.Value;
  threshold?: number;
  color?: string;
};

export default function RefreshIndicator({ refreshing, pullY, threshold = 80, color = '#000' }: Props) {
  const opacity = pullY.interpolate({ inputRange: [0, threshold], outputRange: [0, 1], extrapolate: 'clamp' });

  return (
    <Animated.View style={[styles.container, { opacity }]}> 
      <ActivityIndicator size="small" color={color} animating={refreshing} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 8,
  },
});
