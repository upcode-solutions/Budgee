import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import { useThemeContext } from '@/context/ThemeContext';
import { ColorScheme } from '../../types/ContextTypes';

import Tabs from './Tabs';

import { TabsContainerProps } from '../../types/components/TabsTypes';


export default function TabsContainer(props: TabsContainerProps) {

  const { colors } = useThemeContext();
  const design = styles(colors);
  
  return (
    <View style={design.container}>
      <FlatList
        data={props.tabNames}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={{ gap: 10 }}
        renderItem={({ item, index }) => (
          <Tabs
            tabName={item.tabName}
          />
        )}
      />
    </View>
  )
}

const styles = (colors: ColorScheme) => StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.cardBackground,
    width: '100%',
    height: 40,
    justifyContent: 'space-evenly',
  },
})