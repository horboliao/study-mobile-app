import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from "react-native";

interface MenuItemBoxProps {
    label: string
    icon: object
}
const MenuItemBox: React.FC<MenuItemBoxProps> = ({ label, icon }) => {
    return (
        <Pressable style={styles.pressable}>
            <View style={styles.container}>
                <Image source={icon} resizeMode='contain' />
                <Text style={styles.text}>{label}</Text>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    pressable: {
        alignSelf: 'center',
    },
    container: {
        alignItems: 'center',
        maxWidth: 46,
    },
    text: {
        fontSize: 8,
        fontWeight: 'bold',
    },
});
export default MenuItemBox;
