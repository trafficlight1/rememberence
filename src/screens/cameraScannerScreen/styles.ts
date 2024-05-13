import {StyleSheet} from 'react-native';
import {GlobalSize} from '../../constants/Global';

export const styles = StyleSheet.create({
  camera: {
    flex: 1,
  },
  flex: {
    flex: 1,
  },
  buttonContainer: {
    position: 'absolute',
    width: '90%',
    alignSelf: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    bottom: GlobalSize.hight * 0.12,
    borderWidth: 1,
  },
  buttonText: {
    textAlign: 'center',
    paddingVertical: 12,
  },
  svgContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  onPress: {
    opacity: 0.75,
  },
});
