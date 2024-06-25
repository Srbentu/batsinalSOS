import React, {useState} from 'react';
import {Text, Pressable, TextInput } from 'react-native';
import styles from './Style';

export default function Form({onPress}) {
    return (
        <Pressable style={styles.container}>
            <TextInput style={styles.input} placeholder="Nome"/>
            <TextInput style={styles.input} placeholder="telefone"/>
            <TextInput style={styles.input} placeholder="localização"/>
            <TextInput style={styles.input} placeholder="Observação"/>
            <Pressable onPress={onPress}>
                <Text style={styles.btn}>Enviar</Text>
            </Pressable>
        </Pressable>

    )
}