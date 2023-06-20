import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';



export default function WelcomeScreen()
{
    return(
        <View style={welcome.container}>
        <Text style={{
            padding: 40,
            fontSize: 30,
            color: '#EDEFEE',
            textAlign: 'center',}} numberOfLines={2}>
    Welcome to 
    <Text>
    {' '}Little Lemon
    </Text>
  </Text>
  
        <Text style={{
            fontSize: 24,
            padding: 20,
            marginVertical: 8,
            color: '#EDEFEE',
            textAlign: 'center',
          }} numberOfLines={9}>
        Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a 
        lively but casual environment.We would love to hear more about your experience with us!
        </Text>
      </View>
  
    );
}


const welcome = StyleSheet.create({
  container: {
    flex: 1,
  },
});
