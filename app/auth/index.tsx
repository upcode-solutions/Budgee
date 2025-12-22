import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Signin from './signin';
import Signup from './signup';

const Stack = createNativeStackNavigator();

export default function AuthIndex() {
  return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="Signup" component={Signup} />
      </Stack.Navigator>
  );
}