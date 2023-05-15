import React from 'react';

import {
  Text,
  View,
  StyleSheet
} from 'react-native';

export default function(props){
    return(
        <View style={{width:'100%', flexDirection: 'row'}}>
            <View style={{width:'33.33%',height:50,backgroundColor:'#00f'}}></View>
            <View style={{width:'33.33%',height:50,backgroundColor:'#00a'}}></View>
            <View style={{width:'33.33%',height:50,backgroundColor:'#005'}}></View>
        </View>
    )
}