import React from 'react';
import {Pressable, SafeAreaView, ScrollView, Text, View} from 'react-native';
import {styles} from './styles';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootTabParamList, Routes} from '../../navigation/types';
import FastImage from 'react-native-fast-image';
import MapView, {Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

interface RenderItemProps {
  route: {
    params: {
      X: number;
      Y: number;
      _id: string;
      add: string;
      fid: number;
      name: string;
      sector: string;
      year: string;
      image: string;
    };
  };
}

export const SearchScreen = ({route}: RenderItemProps): JSX.Element => {
  const navigation = useNavigation<NavigationProp<RootTabParamList>>();

  Geolocation.getCurrentPosition(info => console.log(info));

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cemeteryImageContainer}>
        <FastImage
          source={{
            uri: 'https://novynarnia.com/wp-content/uploads/2023/11/marsove-pole.jpg',
          }}
          style={styles.cemeteryImage}
        />
        <Text
          style={
            styles.cemeteryText
          }>{`Меморіальний комплекс Героїв України. (Львів)`}</Text>
      </View>

      <View style={styles.deadPeopleContainer}>
        <FastImage
          source={{
            uri: route.params?.image,
          }}
          style={styles.deadPeopleImage}
        />

        <View style={styles.infoContainer}>
          <Text style={styles.deadPeopleName}>{route?.params?.name}</Text>

          <Text style={styles.deadPeopleYears}>{route?.params?.year}</Text>
        </View>
      </View>

      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          mapType={'satellite'}
          showsMyLocationButton={true}
          showsUserLocation={true}
          showsCompass={true}
          initialRegion={{
            latitude: route.params?.Y,
            longitude: route.params?.X,
            latitudeDelta: 0.003,
            longitudeDelta: 0.003,
          }}>
          <Marker
            coordinate={{latitude: route.params?.Y, longitude: route.params?.X}}
          />
        </MapView>
      </View>

      <Pressable
        onPress={() => navigation.navigate(Routes.CameraScannerScreen)}
        style={({pressed}) => [
          styles.backButtonContainer,
          pressed && styles.onPress,
        ]}>
        <Text style={styles.backButtonText}>Go back</Text>
      </Pressable>
    </SafeAreaView>
  );
};
