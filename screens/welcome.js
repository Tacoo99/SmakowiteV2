import React from 'react';

import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';

import {
    images, colors
} from "../constants";

const welcome = ({ navigation })  => {
    return(
        <View
            style={{
                flex: 1,
                top: 60,
                left: 0,
                right: 0,
                alignItems: 'center',
            }}
        >
            <Image
                source={images.logo_02}
                resizeMode="contain"
                style={{
                    width:  300,
                    height: 100
                }}
                />

            <Text
                style={{
                    top: 150,
                    fontSize: 40,
                    color: colors.primary,
                    fontWeight: 'bold',
                    marginBottom: 10,
                    
                }}
            >
                Witaj w SmakowiteV2!
            </Text>


            <Text
                style={{
                    top: 150,
                    fontSize: 25,
                    color: colors.black,
                    fontWeight: 'bold',
                    
                }}            
            >
                Zaloguj się albo zarejestruj
            </Text>

            <TouchableOpacity
            style={{
                alignItems: 'center',
                backgroundColor: colors.primary,
                top: 350,
                borderRadius: 30,
                width: 300,
                height: 60,
            }}
                onPress = {navigation.replace("SingIn")}
                >

                    <Text
                    style={{
                        color: colors.white,
                        fontSize: 20,
                        marginVertical: 17
                    }}
                
                >
                    Zaloguj się
                </Text>

            </TouchableOpacity>

            <TouchableOpacity
            style={{
                alignItems: 'center',
                backgroundColor: colors.primary,
                top: 370,
                borderRadius: 30,
                width: 300,
                height: 60,
            }}
                onPress = {navigation.replace("SingUp")}
                >

                    <Text
                    style={{
                        color: colors.white,
                        fontSize: 20,
                        marginVertical: 17
                    }}
                
                >
                    Zarejestruj się
                </Text>

            </TouchableOpacity>



        </View>

    )
}


export default welcome;
