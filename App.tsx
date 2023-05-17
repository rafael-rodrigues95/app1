import React from 'react';

import {
  Text,
  View,
  StyleSheet
} from 'react-native';
import CompUm from './components/comp1'
import Caixas from './components/Caixas'
import Estilos from './styles/style.js'

export default function App1(){
  let maybeExibir = true;
  return(
    <View style={Estilos.conteiner}>
      <Text style={{ color: '#f00' }}>Cursos</Text>
      <CompUm curso="React Native" nota="9.0"/>
      <CompUm curso="Java" nota="8.5"/>
      <CompUm curso="PHP" nota="7.0"/>
      <CompUm curso="JavaScript" nota="8.5"/>
      <Text style={Estilos.textoPadrao}>youtube.com</Text>
      <Text style={Estilos.textoTitulo}>facebook.com</Text>
      {maybeExibir ? <Text>Telegram</Text> : <Text>WhatsApp</Text>}
      {maybeExibir && <Text>and Behance</Text>}
      <Caixas exibir={maybeExibir}/>
    </View>
  );
};


/* 

- Estilos na mesma página -

const estilos = StyleSheet.create({
  txt1:{
    color:'#00ffff',
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

*/