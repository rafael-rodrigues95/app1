import React, {useState} from 'react'
import {View, Text, Switch} from 'react-native'

export default function(props){
    const [ligado,setLigado] = useState(false)
    const toggleLigado=()=>setLigado(!ligado)

    return(
        <View>
            <Text>Serviço: {props.nome} - Ligado:{ligado ? 'Sim' : 'Não'}</Text>
            <Switch
                trackColor={{false:'#777', true:'#8bf'}}
                thumbColor={ligado ? '#00f' : '#444'}
                value={ligado}
                onValueChange={toggleLigado}
            />
        </View>
    )
}