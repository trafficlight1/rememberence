import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  tabBarContainer: {
    backgroundColor: '#FFFFFF',
    borderTopRightRadius: 33,
    borderTopLeftRadius: 33,
    paddingHorizontal: '7%',
    position: 'absolute',
    borderTopWidth: 0,
    paddingBottom: 0,
    // justifyContent: 'center'
  },
});

export const options = {
  tabBarLabel: '',
  tabBarStyle: styles.tabBarContainer,
  headerShown: false,
};

export const stackOptions = {
  headerShown: false,
};
