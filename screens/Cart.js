import * as React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: "100%",
    height: "100%",
    flex: 1,
  },

  title: {
    fontSize: 24,
    color: "#4099ff",
    margin: 8
  }
});

const Cart = () => {
    return(

      <View style={styles.container}>
        <View>

        </View>
      <View style={{
          marginTop: '50%',
          marginLeft: '30%'
      }}>
      
        <Image
          source={require ("../assets/images/empty-bag.png") }
          style={{ width: 150, height: 150, marginBottom: 12 }}
        />
        <Text
            style={{
              color: "#ef6136",
              fontSize: 25,
              opacity: 0.55,
              marginLeft: '-3%'
            }}
          >
            Koszyk jest pusty :(
          </Text>
        </View>
      </View>
    );
  }
    

export default Cart;