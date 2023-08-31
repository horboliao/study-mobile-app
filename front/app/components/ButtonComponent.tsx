import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import {SIZES} from "@/app/constants";

interface ButtonProps {
    onPress: () => void;
    title: string;
    outline?: boolean
}

const ButtonComponent: React.FC<ButtonProps> = ({ onPress, title, outline }) => {
    return (
        <Pressable style={[styles.button, outline && styles.outlineButton]} onPress={onPress}>
            <Text style={[styles.text, outline && styles.outlineText]}>{title}</Text>
        </Pressable>
    );
};

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
    outlineButton: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: 'black',
    },
    text: {
        fontSize: SIZES.m,
        color: 'white',
    },
    outlineText: {
        color: 'black',
    },
});

export default ButtonComponent;
