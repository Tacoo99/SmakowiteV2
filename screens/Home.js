import React from 'react';
import {
    View,
    Text,
    Image,
    SafeAreaView, 
    ScrollView,
    Alert
} from 'react-native';
import { PermissionsAndroid } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { colors, images } from "../constants";


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
    }


function renderItem(icon, category, name, photo, duration){
  return(
    <TouchableOpacity
    onPress={() => 
      Alert.alert(
        "Zamówienie zostało złożone",
        "Czas oczekiwania " + {duration}
        
        )}
    >
    <View
      style={{
        marginBottom: 10,
        marginTop: 20

      }}
    >
      <View
        style={{
          flex: 1,
          marginBottom: 20,
          marginLeft: 30,
          flexDirection:'row'
        }
        }
      >

            <Icon name={icon} size={24}color={colors.primary}></Icon>

            <Text
              style={{
                fontSize: 20,
                marginLeft: 8
              }}
            >
            {category}
            </Text>

      </View>

      <View
        style={{
          alignItems: 'center',
        }}
      >

      <Image
        source={photo}
        resizeMode="cover"
        style={{
          
          width: "90%",
          height: 200,
          borderRadius: 16
      }}
      >

      </Image>

      <Text
        style={{
          fontSize: 20,
          marginTop: 10
        }}
      >
        {name}
      </Text>

    </View>

    </View>
    </TouchableOpacity>
  )
}

const Home = () => {
    return (
        <View
            style={{
                flex: 1
            }}
        >
          <View
            style={{
              top: 10,
              width: 50,
              alignContent: 'center',
              alignItems: 'center'
            }}
          >
          <Icon
            name="map-marker-alt"
            backgroundColor={colors.primary}
            size={30}
            color={colors.primary}
            onPress={requestgpsPermission}
            >
            </Icon>
            <Text>GPS</Text>
          </View>
            <View
              style={{
                alignItems: 'center'
              }}
            >
              <Image
                source={images.logo_02}
                resizeMode="contain"
                style={{
                  width: 250,
                  height: 100,
                }}
              >

              </Image>
              </View>


              <Text
                style={{
                  fontSize: 22,
                  marginLeft: 10,
                }}
              >
                Wybierz coś dla siebie!
              </Text>

                <SafeAreaView
                  style={{
                    marginBottom: 170,
                    marginTop: 20,
                  }}
                >
              <ScrollView>
              {renderItem("hamburger","Burgery","Burger z kurczakiem",images.burger, "30 - 45 minut")}
              {renderItem("hamburger","Burgery","Burger z wołowiną",images.burger_2, " 30 - 45 minut")}
              {renderItem("pizza-slice","Pizza","Pizza Margherita",images.pizza, "45 - 60 minut")}
              {renderItem("pizza-slice","Pizza","Pizza Italiana",images.pizza_2, "45 - 60 minut")}
              {renderItem("hotjar","Kebaby","Kebab z wołowiną",images.kebab, "10 - 15 minut")}
              {renderItem("gulp","Napoje","Coca Cola",images.cola, "10 - 15 minut")}
              {renderItem("glass-whiskey","Napoje", "Whisky z Colą",images.drink, " 10 - 15 minut")}

              </ScrollView>
          </SafeAreaView>
              
        </View>
    )
}

export default Home;