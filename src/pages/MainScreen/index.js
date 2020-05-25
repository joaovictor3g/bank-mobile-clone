import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { 
    Feather, 
    MaterialCommunityIcons as MCI, 
    FontAwesome as F, MaterialIcons 
} from '@expo/vector-icons'

import styles from './styles';

export default function MainScreen() {
    const navigation = useNavigation();

    function goToCamera() {
        navigation.navigate('camera');
    }

    return (
        <>
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={goToCamera}>
                    <MCI name="barcode-scan" size={30} color="#FFF"/>
            
                </TouchableOpacity>
                
                <F name="bank" size={50} color="#ffff00" />

                <TouchableOpacity>
                    <Feather name="plus-square" size={30} color="#FFF" />
                </TouchableOpacity>
            </View>
        </View>

        <View style={styles.containerSec} >
            <View style={styles.imageProfile}>
                <MaterialIcons name="person" size={70} color="#0066ff"/>
            </View>

            <Text style={styles.myName}>Joaovictor</Text>

            <TouchableOpacity style={styles.entrar} >
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text style={styles.outraConta}>Outra conta</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.buttonsBottom}>
            <TouchableOpacity style={{ alignItems: "center" }}>
                <MCI name="message-text-outline" size={30} color="#ffff00" />
                <Text style={{ color: "#FFF" }}>Mensagens</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ alignItems: "center" }}>
                <MCI name="fingerprint" size={30} color="#ffff00" />
                <Text style={{ color: "#FFF" }}>Digital</Text>
            </TouchableOpacity>
        </View>
        </>
    )
   
}
