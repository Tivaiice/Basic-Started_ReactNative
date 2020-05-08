import React, { Component } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'

const ImageDetail = ({imageSource, title, score}) => {
    return (
        <View style={{flex:1}}>
            <Image 
                style={{width:100, height:100}}
                source={props.imageSource}
             />
            <Text> {props.title} </Text>
            <Text>Image - score {props.score}</Text> 
        </View> 
    )
}
export default ImageDetail;
