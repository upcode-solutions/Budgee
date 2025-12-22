import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { useControlContext } from '@/context/ControlContext';
import { useThemeContext } from '@/context/ThemeContext';

import { ColorScheme } from '../../types/contexts/ContextTypes';

import PullToRefresh from '../../components/Refresh/PullToRefresh';

import SquareButton from '../../components/Button/SquareButton';

export default function Home() {
  const { colors } = useThemeContext();
  const design = styles(colors);

  const { loading } = useControlContext();

  const handleRefresh = async () => {
	// replace with real data fetching
	await new Promise((r) => setTimeout(r, 1200));
  };

  return (
	<View style={design.container}>
	  <PullToRefresh onRefresh={handleRefresh}>
		<View style={design.contentInner}>
		  <Text>This is home page is { loading ? 'loading' : 'not loading'}</Text>
        <SquareButton size={50} icon="home" isLoading={loading} />
		</View>
	  </PullToRefresh>
	</View>
  );
}

const styles = (colors: ColorScheme) =>
  StyleSheet.create({
	container: { flex: 1, backgroundColor: 'rgba(202, 32, 32, 0)' },
	contentInner: { flex: 1, padding: 16 },
  });