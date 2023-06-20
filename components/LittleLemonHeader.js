import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function LittleLemonHeader()
{
    return(
        <View style={headerfunc.container}> 
          <Text style={{padding:25, fontSize:20
          
          , color:'black', textAlign: 'center'}}>
          Little Lemon
          </Text>

        </View>
    );
}
//man

const headerfunc = StyleSheet.create({
  container: {
    flex: 0.1,
    backgroundColor: '#F4CE14',
  },
});
