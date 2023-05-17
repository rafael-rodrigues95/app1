import React from 'react';

import {
    Text,
    View,
    StyleSheet
} from 'react-native';

export default function (props) {
    return (
        /* flexDirection
        
        <View style={{width:'100%', flexDirection: 'row'}}>
            <View style={{width:'33.33%',height:50,backgroundColor:'#00f'}}></View>
            <View style={{width:'33.33%',height:50,backgroundColor:'#00a'}}></View>
            <View style={{width:'33.33%',height:50,backgroundColor:'#005'}}></View>
        </View>*/

        /* flexWrap
        
        <View style={{width:'100%', height: 300, flexDirection: 'row', flexWrap: 'wrap'}}>
            <View style={{width: 85, height: 50, backgroundColor:'#00f'}}></View>
            <View style={{width: 85, height: 50, backgroundColor:'#00a'}}></View>
            <View style={{width: 85, height: 50, backgroundColor:'#005'}}></View>
            <View style={{width: 85, height: 50, backgroundColor:'#f00'}}></View>
            <View style={{width: 85, height: 50, backgroundColor:'#a00'}}></View>
            <View style={{width: 85, height: 50, backgroundColor:'#500'}}></View> 
        </View>*/

        /* flexGrow
        
        <View style={{width:'100%', height: 300, flexDirection: 'column', justifyContent: 'center', alignItems: 'stretch'}}>
            <View style={{flexGrow: 1, backgroundColor:'#00f'}}></View>
            <View style={{flexGrow: 2, backgroundColor:'#00a'}}></View>
            <View style={{flexGrow: 3, backgroundColor:'#005'}}></View>
            <View style={{flexGrow: 1, backgroundColor:'#f00'}}></View>
            <View style={{flexGrow: 2, backgroundColor:'#a00'}}></View>
            <View style={{flexGrow: 3, backgroundColor:'#500'}}></View>            
        </View>*/

        /* Renderização condicionla */

        <View style={{ width: '100%', height: 300, flexDirection: 'column', justifyContent: 'center', alignItems: 'stretch' }}>
            {
                props.exibir ?
                    <View style={{ flex: 1 }}>
                        <View style={{ flexGrow: 1, backgroundColor: '#00f' }}></View>
                        <View style={{ flexGrow: 2, backgroundColor: '#00a' }}></View>
                        <View style={{ flexGrow: 3, backgroundColor: '#005' }}></View>
                    </View>
                    :
                    <View style={{ flex: 1 }}>
                        <View style={{ flexGrow: 1, backgroundColor: '#f00' }}></View>
                        <View style={{ flexGrow: 2, backgroundColor: '#a00' }}></View>
                        <View style={{ flexGrow: 3, backgroundColor: '#500' }}></View>
                    </View>
            }
        </View >
    )
}