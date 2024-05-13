import React, {useState} from 'react';
import {Pressable, Text, View} from 'react-native';
import {
  Camera,
  useCodeScanner,
  useCameraDevice,
} from 'react-native-vision-camera';
import {styles} from './styles';
import PlusSVG from '../../assets/svg/plus.svg';
import database from '@react-native-firebase/database';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootTabParamList, Routes} from '../../navigation/types';

interface RenderItemProps {}

export const CameraScannerScreen = ({}: RenderItemProps): JSX.Element => {
  const navigation = useNavigation<NavigationProp<RootTabParamList>>();
  const [code, setCode] = useState<any>();

  const codeScanner = useCodeScanner({
    codeTypes: ['qr', 'ean-13'],
    onCodeScanned: codes => {
      if (codes[0].value) {
        setCode(codes[0]);
        console.log(codes[0]);
      } else {
        setCode((prevState: any) => {
          const updatedState = {
            ...prevState,
            frame: {
              height: prevState.frame.height,
              width: prevState.frame.width,
              x: -10,
              y: -10,
            },
          };
          return updatedState;
        });
      }
    },
  });

  const device = useCameraDevice('back');

  async function openUser() {
    const data = await database().ref(`/post/${code.value}`).once('value');
    navigation.navigate(Routes.SearchScreen, data.val());
  }

  if (device == null) {
    return <View />;
  }

  return (
    <View style={styles.flex}>
      <Camera
        style={styles.camera}
        codeScanner={codeScanner}
        isActive={true}
        device={device}
      />

      {code?.value && (
        <Pressable
          onPress={openUser}
          style={({pressed}) => [
            styles.buttonContainer,
            pressed && styles.onPress,
          ]}>
          <Text style={styles.buttonText}>{code.value}</Text>
        </Pressable>
      )}
      {code?.value && (
        <View
          style={[
            styles.svgContainer,
            {
              width: code.frame.width / 2.1,
              height: code.frame.height / 2.2,
              top: code.frame.x / 2.3,
              right: code.frame.y / 3.3333,
            },
          ]}>
          <PlusSVG width={33} height={33} />
        </View>
      )}
    </View>
  );
};
