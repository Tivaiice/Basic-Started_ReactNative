import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

const BoxScreen = props => {
    return (
        <View style={{flex:1}}>
        <View style={{flex: 1,borderWidth: 1, borderColor: '#000000'}}>
            <Text style={{borderWidth: 1, borderColor: 'tomato', margin: 20}}> textInComponent </Text>
            <View style={{alignItems: 'stretch'}}>
                <Text style={{borderWidth: 1}}> child 1 </Text>
            </View>
            <View style={{alignItems: 'flex-start'}}>
                <Text style={{borderWidth: 1}}> child 2</Text>
            </View>
            <View style={{alignItems: 'flex-end'}}>
                <Text style={{borderWidth: 1}}> child 3</Text>
            </View>
        </View>

        <View style={{flex: 1,borderWidth: 1, flexDirection:'row',height: 200, justifyContent:'space-around'}}>
            <View>
                <Text style={{borderWidth: 1, height: 200}}> child 1 </Text>
            </View>
            <View>
                <Text style={{borderWidth: 1, height: 200}}> child 2</Text>
            </View>
            <View>
                <Text style={{borderWidth: 1, height: 200}}> child 3</Text>
            </View>
        </View>

        <View style={{flex: 1,borderWidth: 1, flexDirection:'column',height: 200, justifyContent:'space-around'}}>
            <View>
                <Text style={{borderWidth: 1}}> child 1 </Text>
            </View>
            <View>
                <Text style={{borderWidth: 2,borderColor: 'red', position: 'absolute',top:0, right: 0, bottom : 0 , left: 0}}> child 2</Text>
            </View>
            <View>
                <Text style={{borderWidth: 1}}> child 3</Text>
            </View>
        </View>
        </View>
    )
}

export default BoxScreen;