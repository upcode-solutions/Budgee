import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import { useThemeContext } from '@/context/ThemeContext';
import { ColorScheme } from '../../types/contexts/ContextTypes';

import SquareButton from '@/components/Buttons/SquareButton';
import { SquareButtonProps } from '@/types/components/ButtonTypes';

import Tabs from './Tabs';

import { TabsContainerProps } from '../../types/components/TabsTypes';


export default function TabsContainer(props: TabsContainerProps) {

  const { colors } = useThemeContext();
  const design = styles(colors);
  
  const isScrollable = props.tabNames.length > 2;

  const SquareButtonProps: SquareButtonProps = {
    size: 45,
    icon: "plus"
  }

  if (!isScrollable) {
    return (
      <View style={design.rowContainer}>
        {props.tabNames.map((item, index) => (
          <Tabs key={index} tabName={item.tabName} expand />
        ))}
        <SquareButton {...SquareButtonProps} />
      </View>
    );
  }

  return (
    <View style={design.rowContainer}>
    <ScrollView
      horizontal
      scrollEnabled={true}
      nestedScrollEnabled={true}
      showsHorizontalScrollIndicator={false}
      style={design.scrollContainer}
      contentContainerStyle={design.contentContainer}
    >
      { 
        props.tabNames.map((item, index) => (
          <Tabs
            key={index}
            tabName={item.tabName}
            expand={false}
          />
        ))
      }
    </ScrollView>
    <SquareButton {...SquareButtonProps} />
    </View>
  )
}

const styles = (colors: ColorScheme) => StyleSheet.create({
  scrollContainer: {
    width: '100%',
    height: 45,
    maxHeight: 45,
    borderRadius: 10,
    overflow: 'hidden',
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  rowContainer: {
    width: '100%',
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
})