import React, { useState } from 'react'
import { Text, StyleSheet, View, TextInput } from 'react-native'

const TextScreen = () => {

    const [name, setName] = useState('')

    return (
        <View>
            <Text>Enter The name: </Text>
            <TextInput 
                style={{margin : 20, borderColor: '#000000', borderWidth: 1}}
                autoCapitalize="sentences"
                autoCorrect={false}
                value={name}
                onChangeText={(newValue) => setName(newValue)}
            />
            <Text>My name is {name}</Text>
        </View>
    )
}

export default TextScreen;