import {StyleSheet} from 'react-native';
import {GlobalSize} from '../../constants/Global';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4',
    marginBottom: GlobalSize.hight * 0.06,
  },
  flex: {
    flex: 1,
  },
  cemeteryImageContainer: {
    width: '90%',
    alignSelf: 'center',
    height: GlobalSize.hight * 0.15,
    borderRadius: 20,
    overflow: 'hidden',
  },
  cemeteryImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
  },
  cemeteryText: {
    color: '#FFF',
    textAlign: 'left',
    paddingTop: 7,
    width: '90%',
    alignSelf: 'center',
    fontSize: GlobalSize.width * 0.04,
    fontWeight: '500',
  },
  deadPeopleContainer: {
    width: '90%',
    alignSelf: 'center',
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    marginTop: 22,
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderWidth: 1,
  },
  deadPeopleImage: {
    width: GlobalSize.width * 0.2,
    height: GlobalSize.width * 0.2,
    borderRadius: GlobalSize.width * 0.1,
    borderWidth: 2,
  },
  infoContainer: {
    marginLeft: '5%',
  },
  deadPeopleName: {
    fontSize: GlobalSize.width * 0.05,
    fontWeight: '500',
  },
  deadPeopleYears: {
    fontSize: GlobalSize.width * 0.04,
    fontWeight: '400',
  },
  mapContainer: {
    flex: 1,
    marginVertical: 20,
  },
  map: {
    width: '90%',
    height: '100%',
    alignSelf: 'center',
    borderRadius: 20,
  },
  backButtonContainer: {
    width: '90%',
    alignSelf: 'center',
    borderRadius: 20,
    backgroundColor: '#010D37',
    marginBottom: GlobalSize.hight * 0.04,
  },
  backButtonText: {
    color: '#FFFFFF',
    paddingVertical: 12,
    textAlign: 'center',
    fontSize: GlobalSize.width * 0.05,
  },
  onPress: {
    opacity: 0.74,
  },
});
