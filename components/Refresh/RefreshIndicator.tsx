import React from 'react';
import { Animated, StyleSheet, Text } from 'react-native';

type Props = {
  refreshing: boolean;
  pullY: Animated.Value;
  threshold?: number;
  color?: string;
};

export default function RefreshIndicator({ refreshing, pullY, threshold = 80, color = '#eb1313' }: Props) {
  const opacity = pullY.interpolate({ inputRange: [0, threshold], outputRange: [0, 1], extrapolate: 'clamp' });

  return (
    <Animated.View style={[styles.container, { opacity }]}> 
      <Text style={{ marginBottom: 8, color }}>{refreshing ? 'Refreshing...' : 'Pull to refresh'}</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
