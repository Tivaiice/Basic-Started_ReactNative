import React, { useState } from 'react'
import { Text, StyleSheet, View, Button,FlatList } from 'react-native'

const ColorScreen = () => {

    const [colors, setColors] = useState([]);

    console.log('====================================');
    console.log(colors);
    console.log('====================================');

    return (
        <View>
            <Button  
                title="Add a Colors"
                onPress={()=> {
                    setColors([...colors, randomRgd()])
                }}
            />
            <View style={{ height: 100, width: 100, backgroundColor: randomRgd() }}/>
            <FlatList
                keyExtractor={(item) => item } 
                data={colors}
                renderItem={({item}) => {
                    //item === rgd(0,0,0)
                    return(
                        <View style={{ height: 100, width: 100, backgroundColor: item }}/>
                    )
                }}
            />
        </View>
    )
}

const randomRgd = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`
}

export default ColorScreen;
