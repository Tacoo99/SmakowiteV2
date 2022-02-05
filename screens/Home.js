import React from 'react';
import {
    View,
    Text
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const requestgpsPermission = async () => {

    try {
    const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "Aplikacja Smakowite potrzebuje dostępu do GPS",
          message:
            "Smakowite potrzebuje dostępu do twojej lokalizacji" +
            "aby znaleźć restauracje w twojej okolicy.",
          buttonNegative: "Anuluj",
          buttonPositive: "Zgadzam się"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("Smakowite ma teraz dostęp do lokalizacji w telefonie");
      } else {
        console.log("Odmówiono dostępu do lokalizacji");
      }

    } catch (err) {
        console.warn(err);
      }
    };


const Home = ( { navigation }) => {
    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <Icon name="home" size={30} color="#4F8EF7" />
            <Text>Strona główna</Text>
        </View>
    )
}

export default Home;