import React from "react";
import { View, Text, StyleSheet } from "react-native";

const HomeScreen = () => {

  const greeting = 123;
  const arr = [123, 'adc'];
  const name = 'ICE'; 

  return (
    <View>
      <Text style={styles.text}>My name is {name}</Text>
      <Text>{greeting}</Text>
      <Text>{arr}</Text>
    </View>
    )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
 