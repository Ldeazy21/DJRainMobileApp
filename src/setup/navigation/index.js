import { createStackNavigator } from '@react-navigation/stack';

import Auth from '../../auth';

const Stack = createStackNavigator();

export default function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Auth" component={Auth} />
    </Stack.Navigator>
  );
}