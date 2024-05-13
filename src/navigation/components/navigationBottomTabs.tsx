import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {RootTabParamList, Routes} from '../types';
import {iconSize, styles} from './styles';

import {GlobalColors} from '../../constants/Global';
import {CameraScannerScreen, ProfileScreen, SearchScreen} from '../../screens';

import GroupSVG from '../../assets/svg/group.svg';
import SearchSVG from '../../assets/svg/search.svg';
import UserSVG from '../../assets/svg/user.svg';
import {options} from '../styles';

const Tab = createBottomTabNavigator<RootTabParamList>();

const CameraScannerScreenIcon = ({focused}: {focused: boolean}) => (
  <GroupSVG
    width={iconSize}
    height={iconSize}
    fill={focused ? GlobalColors.iconActive : GlobalColors.iconPassive}
  />
);

const SearchScreenIcon = ({focused}: {focused: boolean}) => (
  <SearchSVG
    width={iconSize}
    height={iconSize}
    fill={focused ? GlobalColors.iconActive : GlobalColors.iconPassive}
  />
);

const ProfileScreenIcon = ({focused}: {focused: boolean}) => (
  <UserSVG
    width={iconSize}
    height={iconSize}
    fill={focused ? GlobalColors.iconActive : GlobalColors.iconPassive}
  />
);

export const NavigationBottomTabs = (): React.JSX.Element => {
  return (
    <Tab.Navigator
      sceneContainerStyle={styles.tabSceneContainerStyle}
      screenOptions={options}>
      <Tab.Screen
        name={Routes.CameraScannerScreen}
        component={CameraScannerScreen}
        options={{
          tabBarIcon: CameraScannerScreenIcon,
        }}
      />
      <Tab.Screen
        name={Routes.SearchScreen}
        component={SearchScreen}
        options={{
          unmountOnBlur: true,
          tabBarIcon: SearchScreenIcon,
        }}
      />
      <Tab.Screen
        name={Routes.ProfileScreen}
        component={ProfileScreen}
        options={{
          tabBarIcon: ProfileScreenIcon,
        }}
      />
    </Tab.Navigator>
  );
};
