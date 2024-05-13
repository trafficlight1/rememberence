export enum Routes {
  TabNavigator = 'TabNavigator',
  CameraScannerScreen = 'CameraScannerScreen',
  ProfileScreen = 'ProfileScreen',
  SearchScreen = 'SearchScreen',
}

export type RootTabParamList = {
  [Routes.CameraScannerScreen]: any;
  [Routes.ProfileScreen]: any;
  [Routes.SearchScreen]: any;
};

export type RootStackParamList = {
  [Routes.TabNavigator]: undefined;
};
