import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {RootStackParamList, Routes} from './types';
import {NavigationBottomTabs} from './components/navigationBottomTabs';
import {stackOptions} from './styles';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Navigation = (): React.JSX.Element => {
  return (
    <Stack.Navigator screenOptions={stackOptions}>
      <Stack.Screen
        name={Routes.TabNavigator}
        component={NavigationBottomTabs}
      />
    </Stack.Navigator>
  );
};
