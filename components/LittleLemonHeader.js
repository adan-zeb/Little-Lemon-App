import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function LittleLemonHeader()
{
    return(
        <View style={headerfunc.container}> 
          <Text style={{padding:50
          , fontSize:25,fontWeight: 'bold'
          , color:'black', textAlign: 'center'}}>
          Little Lemon
          </Text>

        </View>
    );
}


const headerfunc = StyleSheet.create({
  container: {
    flex: 0.2,
    backgroundColor: '#F4CE14',
  },
});
