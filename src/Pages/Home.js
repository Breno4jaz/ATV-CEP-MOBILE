import * as React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import FindCep from '../components/findCep';
import Cep from '../components/cep';
import API from '../components/api';

function Home(props) {

    return (
        <View style={styles.container}>
            <FindCep/>           
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Home