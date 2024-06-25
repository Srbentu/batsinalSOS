import React, {useState} from 'react';
import {Text, Pressable } from 'react-native';
import styles from './Style';


export default function BatButton({onPress}) {
    return (
        <>
            <Pressable onPress={onPress}>
                <Text style={styles.button}>Get Help !!!</Text>
            </Pressable>
        </>

    )
}