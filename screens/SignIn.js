import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    
} from 'react-native';

import {
    images, colors
} from "../constants";

import { KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import { TextInput } from 'react-native-gesture-handler';


const SignIn = ({ navigation })  => {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    function checkRecord(){

        var APIURL = "http://192.168.0.248/AM_LOGIN/login.php";

        var headers = {
            'Accept' : 'application/json',
            'Content-Type' : 'application/json'
          };
        
        
        var Data ={
            Email: email,
            Password: password
        };

        fetch(APIURL,{
            method: 'POST',
            headers: headers,
            body: JSON.stringify(Data)
          })
          .then((Response)=>Response.json())
          .then((Response)=>{
            alert(Response[0].Message)
            if (Response[0].Message == "Zalogowano pomyślnie") {
              navigation.navigate("Home");
            }
            console.log(Data);
          })
          .catch((error)=>{
            console.error("[BŁĄD]" + error);
          })
        }

    
    return (
            <View
                style={{
                    flex: 1,
                    paddingVertical: 10,
                    marginTop: 10,
                    backgroundColor: 'white'
                }}
            >
                <KeyboardAwareScrollView
                    keyboardDismissMode='on-drag'
                    contentContainerStyle={{
                        flex: 1,
                        paddingHorizontal: 10
                    }}
                >
                    <View
                        style={{
                            alignItems: 'center',
                            marginTop: 10
                        }}
                    >
                        <Image
                            source={images.logo_02}
                            resizeMode="contain"
                            style={{
                                top: 15,
                                height: 100,
                                width: 250
                            }}
                        />
    
                    </View>
    
                    <View
                        style={{
                            marginTop: 70
                        }}
                    >
                        <Text
                            style={{
                                textAlign: 'center',
                                fontSize: 30,
                            }}
                        >
                            Zaloguj
                        </Text>
                        
                        <Text
                            style={{
                                textAlign: 'center',
                                color: colors.darkgray,
                                marginTop: 20,
                                fontSize: 16,
                                marginBottom: 50
                            }}
                        >
                            Witaj z powrotem, brakowało nam Ciebie :)
    
                        </Text>
    
                    </View>


                    <View
                    style={{
                        flexDirection: 'row',
                        height: 55,
                        paddingHorizontal: 10,
                        justifyContent: 'center',
                        marginTop: 8,
                        borderRadius: 30,
                        backgroundColor: colors.lightGray2
                    }}
                >

                    <TextInput
                        placeholder='Podaj e-mail'
                        placeholderTextColor={colors.gray}
                        keyboardType='email-address'
                        autoCompleteType='email'
                        onChangeText={newText => setEmail(newText)}
                        defaultValue={email}
                    >

                    </TextInput>
                    </View>

                    <View
                    style={{
                        flexDirection: 'row',
                        height: 55,
                        paddingHorizontal: 10,
                        justifyContent: 'center',
                        marginTop: 40,
                        borderRadius: 40,
                        backgroundColor: colors.lightGray2
                    }}
                >

                    <TextInput
                        placeholder='Podaj hasło'
                        placeholderTextColor={colors.gray}
                        keyboardType='default'
                        autoCompleteType='password'
                        secureTextEntry={true}
                        onChangeText={newText => setPassword(newText)}
                        defaultValue={password}
                            
                    >
                    </TextInput>

                    </View>


                <TouchableOpacity
            style={{
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: colors.primary,
                borderRadius: 40,
                width: 250,
                alignItems: 'center',
                height: 50,
                top: 40,
                left: 90,
            }}

            onPress={() => checkRecord(email, password)}
            >
                <Text
                    style={{
                        color: 'white',
                        fontSize: 25,
                        marginLeft: 3,
                        backgroundColor: null
                    }}
                >
                    Zaloguj się
                </Text>

            </TouchableOpacity>

            <TouchableOpacity
            style={{
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: colors.primary,
                borderRadius: 40,
                width: 250,
                alignItems: 'center',
                height: 50,
                top: 70,
                left: 90,
            }}
            onPress={() => navigation.replace("Welcome")}
            >
                <Text
                    style={{
                        color: 'white',
                        fontSize: 25,
                        marginLeft: 3,
                        backgroundColor: null
                    }}
                >
                    Powrót
                </Text>

            </TouchableOpacity>

            </KeyboardAwareScrollView>
            </View>
        )
}

export default SignIn;