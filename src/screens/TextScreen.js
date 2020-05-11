import React, { useState } from 'react'
import { Text, StyleSheet, View, TextInput } from 'react-native'

const TextScreen = () => {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

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
            {false ? <Text>The was True </Text>: null}

            <Text>Enter The password: </Text>
            <TextInput 
                style={{margin : 20, borderColor: '#000000', borderWidth: 1}}
                autoCapitalize="sentences"
                autoCorrect={false}
                value={password}
                onChangeText={(newValue) => setPassword(newValue)}
            />
            {password.length < 4 ? <Text>Password must be 4 characters</Text> : null}
        </View>
    )
}

export default TextScreen;