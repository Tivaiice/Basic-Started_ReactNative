import React, { Component } from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = props => {
  return (
    <View>
        <View style={{width:20, height:20}}>
            <ImageDetail
                title="Forest"
                imageSource={require("../../assets/contact.png")}
            />
        </View>
        <View style={{width:20, height:20}}>
            <ImageDetail
                title="Beach"
                imageSource={require("../../assets/homecars.png")}
            />
        </View>
        
        <View style={{width:20, height:20}}>
            <ImageDetail
                title="Mountain"
                imageSource={require("../../assets/icon.png")}
            />
            </View>
    </View>
  );
};

export default ImageScreen;
