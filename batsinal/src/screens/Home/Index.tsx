import React, {useState} from 'react';
import { Text, View} from 'react-native';
import {StatusBar} from "expo-status-bar";
import styles from './Style';
import Batlogo from "../../components/Batlogo/Index";
import Button from "../../components/Button/Index";
import Form from "../../components/Form/Index";

export default function Index() {
    const [changeBlock, setChangeBlock] = useState(false);

    async function handlePress() {
        setChangeBlock(!changeBlock);
    }
    return (
        <View style={styles.container}>
            <View>
                <StatusBar style="auto" />
            </View>
            {!changeBlock && (
                <>
                    <View style={styles.logoContainer}>
                        <Batlogo />
                    </View>
                    <View>
                        <Button onPress={handlePress} />
                    </View>
                </>
            )}
            {changeBlock && (
                <>
                    <Form onPress={handlePress} />
                </>
            )}

            <View>
                <Text style={styles.mini}>Design by Me...</Text>
            </View>
        </View>
    );
}
