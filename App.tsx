import React from 'react';

import {Text, View, StyleSheet, Image, Button, Alert, ImageBackground} from 'react-native';
import ListaPlana from './components/ListaPlana'
import CompUm from './components/comp1';
import Caixas from './components/Caixas';
import Estilos from './styles/style.js';

/* Exemplos de functions

--------------------------------
function dobro(n){
  return n*2
}

(n)=>{return n*2}

n=>return n*2 

const dobro=n=>n*2
--------------------------------

--------------------------------
function soma(n1,n2){
  return n1+n2
}

(n1,n2)=>{return n1+n2}
--------------------------------

--------------------------------
const metade=(n)=>{
  return n/2
}

<Text>{metade(4)}</Text>
--------------------------------

*/

const imgbg = './assets/background.jpg'

export default function App1() {
  let maybeExibir = true;
  return (
    
      <View style={Estilos.conteiner}>

        {/* <Image source={require('./assets/logo-cam.jpg')} style={estilos.logo} /> */}
        
        {/*
        <Button
          title="Mostrar mensagem"
          onPress={()=>Alert.alert('Objetivo','Curso de React Native.')}
        />

        <Text style={{color: '#f00'}}>Cursos</Text>
        <CompUm curso="React Native" nota="9.0" />
        <CompUm curso="Java" nota="8.5" />
        <CompUm curso="PHP" nota="7.0" />
        <CompUm curso="JavaScript" nota="8.5" />
        <Text style={Estilos.textoPadrao}>youtube.com</Text>
        <Text style={Estilos.textoTitulo}>facebook.com</Text>
        {maybeExibir ? <Text>Telegram</Text> : <Text>WhatsApp</Text>}
        {maybeExibir && <Text>and Behance</Text>}
        <Caixas exibir={maybeExibir} />
        */}
        <ImageBackground source={require(imgbg)} resizeMode="cover" style={{flex: 1, width: "100%"}}>
        <Text>CFB Cursos</Text>
        <Text>Curso de React Native</Text>
        <ListaPlana/>
        </ImageBackground>
      </View>
    
  );
}

/* Estilo da imagem 

const estilos = StyleSheet.create({
  logo: {
    width: 50,
    resizeMode: 'contain',
  },
});

*/

/* Estilos na mesma página

const estilos = StyleSheet.create({
  txt1:{
    color:'#00ffff',
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center'
  }
});*/
