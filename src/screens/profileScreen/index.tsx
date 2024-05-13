import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';

interface RenderItemProps {}

export const ProfileScreen = ({}: RenderItemProps): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text>1</Text>
    </View>
  );
};
