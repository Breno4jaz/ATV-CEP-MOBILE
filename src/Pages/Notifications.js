import * as React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useFonts, Oswald_400Regular, Oswald_500Medium, Oswald_700Bold } from '@expo-google-fonts/oswald';
import Cep from '../components/cep';
import FindCep from '../components/findCep';
import API from '../components/api';

function Notifications(props) {
  return (
    <View style={styles.container}>
      <View style={styles.cepContainer}>
        <Text style={styles.title}>Página 02</Text>
      </View>
    </View>
  );

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
    backgroundColor: '#4b0082',
    padding: 10
  },
  title: {
    fontSize: 18,
    fontFamily: 'Oswald_500Medium',
    color: '#FFf',
    paddingBottom: 10
  },

})

export default Notifications