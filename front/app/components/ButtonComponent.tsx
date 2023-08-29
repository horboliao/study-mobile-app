import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import {SIZES} from "@/app/constants";

interface ButtonProps {
    onPress: () => void;
    title: string;
}

const ButtonComponent: React.FC<ButtonProps> = ({ onPress, title }) => {
    return (
        <Pressable style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    );
};

export default ButtonComponent;
const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 15,
        borderRadius: 50,
        backgroundColor: 'black',
        width: '100%',
        marginVertical: 10
    },
    text: {
        fontSize: SIZES.m,
        color: 'white',
    },
});
