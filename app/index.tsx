import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { useControlContext } from '../context/ControlContext';

import Signin from './auth/signin';
import Home from './home/home';

export default function Index() {
  
  const { isLoggedIn, setIsLoggedIn } = useControlContext();
  

  return (
    <View>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={() => setIsLoggedIn(!isLoggedIn)}>
          <Text>Signin</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setIsLoggedIn(!isLoggedIn)}>
          <Text>Signin</Text>
        </TouchableOpacity>
      </View>
      { isLoggedIn ? <Home /> : <Signin />}
    </View>
  )
}