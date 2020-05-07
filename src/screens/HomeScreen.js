import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {


  const name = 'Íce';
  return (
    <View>

      <Text style={{fontSize: 20,alignSelf:'center'}}>My name is {name}</Text>
      <Button 
        title="Click here!! Go to Component"
        onPress={() => navigation.navigate('Components')}    
      />

      <Button 
        title="Click here!! Go to List"
        onPress={() => navigation.navigate('List')}    
      />

      <Button 
        title="Click here!! Go to Image"
        onPress={() => navigation.navigate('Image')}    
      />

    </View>
    )
};


export default HomeScreen;
 