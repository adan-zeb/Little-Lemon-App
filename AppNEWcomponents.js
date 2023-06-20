import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';


export default function App() {
  return (
   <>
    <View style={stylesHead.container}>
      <LittleLemonHeader/>
      
    </View>
      <View style={stylesFooter.container}>
      <LittleLemonFooter/>
      
    </View>
    </>
   
  );
}
const stylesFooter = StyleSheet.create({
  container: {
    backgroundColor: '#495E57',
  },
});

const stylesHead = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#495E57',
  },
});
//file