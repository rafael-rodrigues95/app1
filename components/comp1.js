import React from 'react';

import {
    Text,
    View
} from 'react-native';
import Estilos from '../styles/style.js'

let nt;

export default function comp1(props) {
    nt=props.nota
    return (
        <View>
            <Text style={Estilos.textoCursos}>Curso de {props.curso} - nota = {nt}</Text>
        </View>
    )
}