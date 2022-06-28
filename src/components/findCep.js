import * as React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useFonts, Oswald_400Regular, Oswald_500Medium, Oswald_700Bold } from '@expo-google-fonts/oswald';
import Cep from '../components/cep';
import API from '../components/api';



function FindCep() {

    const [cep, setCep] = useState(0);
    const [inputCep, setInputCep] = useState(0);

    async function loadingCep() {
        const response = await API.get('ws/'+inputCep+'/json/');
        setCep(response.data);
    }

    return (
        <>
            <View style={styles.cepContainer}>
                <Text style={styles.title}>Digite o seu CEP:</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder='Ex.: 11750000'
                        placeholderTextColor='#FFF'
                        keyboardType='numeric'
                        onChangeText={(inputCep) => setInputCep(inputCep)}
                    />
                </View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={loadingCep}
                >
                    <Text style={styles.buttonText}
                        onPress={loadingCep}
                    >Buscar</Text>
                </TouchableOpacity>
            </View>
            <Cep data={cep}/>
        </>


    )

}







const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    cepContainer: {
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: '#4b0832',
        padding: 10
    },
    title: {
        fontSize: 18,
        fontFamily: 'Oswald_500Medium',
        color: '#FFf',
        paddingBottom: 10
    },
    inputContainer: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'flex-end',
        textAlign: 'center',
        paddingLeft: 10,

    },
    input: {
        fontSize: 18,
        fontFamily: 'Oswald_500Medium',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#FFF',
        keyboardType: 'numeric',
        borderBottomWidth: 2,
        borderBottomColor: '#FFF',
        marginBottom: 10
    },
    button: {
        backgroundColor: '#8afbe2',
        borderRadius: 10,
        padding: 10,
        width: '60%',
        textAlign: 'center',
        alignItems: 'center',

    },
    buttonText: {
        fontSize: 18,
        fontFamily: 'Oswald_500Medium',
        color: '#FFf',
    },
    cepResultContainer: {
        width: '90%',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#4b7081',
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

export default FindCep