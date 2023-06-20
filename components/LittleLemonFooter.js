import * as React from 'react';
import {StyleSheet,View, Text} from 'react-native';
import { StatusBar } from 'expo-status-bar';
export default function LittleLemonHeader()
{
    return(
<View style={footerfunc.container}>
    <Text style={{fontSize:18, color:'black',textAlign: 'center',}}>
All Rights Reserved By Little Lemon, 2002{' '}
    </Text>
</View>

);
}


const footerfunc = StyleSheet.create({
    container: {
    backgroundColor: '#F4CE14',
    marginBottom:10,
    },
  });
  