import { Redirect } from 'expo-router';
import React from 'react';
import { View } from 'react-native';

import { useControlContext } from '../context/ControlContext';

import Home from './home';

export default function Index() {
  const { isLoggedIn } = useControlContext();

  if (!isLoggedIn) {
    return <Redirect href="./auth" />;
  }

  return (
    <View style={{ flex: 1 }}>
      <Home />
    </View>
  );
}