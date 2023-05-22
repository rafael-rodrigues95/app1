import React from 'react';

import {Text, View, StyleSheet, Image, Button, Alert, FlatList} from 'react-native';

const produtos=[
    {
        id:'001',
        desc:['Mouse','25.00']
    },
    {
        id:'002',
        desc:['Teclado','50.00']
    },
    {
        id:'003',
        desc:['Monitor','430.00']
    }
]

export default function() {
    return(
        <View>
            <FlatList
                data={produtos}
                keyExtractor={item=>item.id}
                renderItem={({item})=><Text>Descrição:{item.desc[0]} - Valor:{item.desc[1]}</Text>}
            />
        </View>
    )
}