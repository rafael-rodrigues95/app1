import React, {useState} from 'react'
import {View, Text, TextInput, Button} from 'react-native'

export default function(){

    const [nome, setNome]=useState("")
    const mudarNome=() => {}

    return(
        <View>
            <Text>Digite seu nome: </Text>
            <TextInput
                style={{borderWidth:1, borderColor:'#000'}}
                value={nome}
                onChangeText={text=>setNome(text)}
            />
            <Text>Valor digitado: {nome}</Text>
        </View>
    )
}