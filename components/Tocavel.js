import React, {useState} from 'react'
import {View, Text, TextInput, TouchableHightlight, TouchableOpacity, Button, StyleSheet} from 'react-native'

export default function(){

    const [cont, setCont] = useState(0);
    const contar=()=>{
        setCont(cont + 1)
    }

    return(
        <View>
            <TouchableOpacity
                style={estilos.botao}
                onPress={contar}
                underlayColor="#f00"
            >

            </TouchableOpacity>
            <Text>{cont}</Text>
        </View>
    );
}

const estilos=StyleSheet.create({
    botao: {
        alignItems: "center",
        backgroundColor: "#0ff",
        padding: 10
    }
});