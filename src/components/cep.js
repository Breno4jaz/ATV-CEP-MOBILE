import * as React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useFonts, Oswald_400Regular, Oswald_500Medium, Oswald_700Bold } from '@expo-google-fonts/oswald';

function Cep(props) {

    return (
        <View style={styles.cepResultContainer}>

            <Text style={styles.text}>
                CEP: {props.data.cep}
            </Text>
            <Text style={styles.text}>
                Logradouro: {props.data.logradouro}
            </Text>
            <Text style={styles.text}>
                Bairro: {props.data.bairro}
            </Text>
            <Text style={styles.text}>
                Localidade: {props.data.localidade}
            </Text>
            <Text style={styles.text}>
                UF: {props.data.uf}
            </Text>
        </View>
    )

}

const styles = StyleSheet.create({
    cepResultContainer: {
        width: '90%',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#4b0082',
        padding: 10,
        marginVertical: 10
    },
    text: {
        fontSize: 18,
        fontFamily: 'Oswald_500Medium',
        color: '#FFf',
        paddingBottom: 10,
        marginLeft: '20%',
        alignSelf: 'flex-start'

    }

})

export default Cep