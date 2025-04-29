import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

function HomeScreen(){
  return (
      <View style={styles.container}>
        <Text>Hello World</Text>
      </View>
  )
}

function CounterScreen(){
    const [counter, setCount] = useState(0);
    const increase = () => setCount(prev => prev + 1);
    const decrease = () => setCount(prev => (prev > 0 ? prev - 1 : 0));
    return (
      <View style={styles.container}>
        <Text style={styles.counterText}>Counter: {counter}</Text>
        <Button title="Counter Plus" onPress={increase}/>
        <Button title="Counter Minus" onPress={decrease}/>
      </View>
  )
}

const BottomTab = createBottomTabNavigator();

export default function App() {
  return (
      <NavigationContainer>
          <BottomTab.Navigator>
            <BottomTab.Screen name="Home" component={HomeScreen} />
            <BottomTab.Screen name="Counter" component={CounterScreen} />
          </BottomTab.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    counterText: {
        fontSize: 24,
        marginBottom: 20,
    }
});
