import React, {useState} from 'react';

import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    RefreshControl
} from 'react-native';

export default function (props) {

    const [atualizando, setAtualizando] = useState(false); // Usado na função de recarregar a página
    function aoAtualizar() {
        setAtualizando(true);
        // Aqui vai a rotina de atualização
        setTimeout(() => { setAtualizando(false) }, 3000)
        // Após tudo estar atualizado, setar o 'atualizando' para falso
        // setAtualizando(false)
    }

    return (
        <ScrollView
            style={{ backgroundColor: '#333', padding: 15 }}
            refreshControl={
                <RefreshControl
                    refreshing={atualizando}
                    onRefresh={aoAtualizar}
                />
            }
        >
            <Text>
                Algum texto.
            </Text>
        </ScrollView>
    )
}