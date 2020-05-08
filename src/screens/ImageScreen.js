import React, { Component } from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = props => {
  return (
    <View style={{flexDirection:'column'}}>
    <View style={{width:150, height:100}}>
            <ImageDetail
                title="Forest"
                imageSource={require("../../assets/bird.png")}
                score={8}
            />
        </View>
        <View style={{marginTop:50,width:150, height:100}}>
            <ImageDetail
                title="Beach"
                imageSource={require("../../assets/bird.png")}
                score={9}
            />
        </View>
        
        <View style={{marginTop:50,width:150, height:100}}>
            <ImageDetail
                title="Mountain"
                imageSource={require("../../assets/bird.png")}
                score={10}
            />
            </View>
    </View>
  );
};

export default ImageScreen;
