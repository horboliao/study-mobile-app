import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import {COLORS, SIZES} from "@/app/constants";

interface CheckboxProps {
    option: Option;
    toggleOption: (Option) => void;
    selectedOptions: Set<Option>
}

const Checkbox:React.FC<CheckboxProps> = ({option, toggleOption, selectedOptions}) => {
    return (
        <View
            style={styles.checkbox}
            key={option.id}
        >
            <Text style={styles.checkboxText}>{option.id}</Text>
            <TouchableOpacity
                style={styles.checkboxSquare}
                onPress={() => toggleOption(option)}
            >
                {selectedOptions.has(option) && (
                    <Icon name="times" size={20} color="black" />
                )}
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    checkbox: {
        margin: 2,
        alignItems: "center",
    },
    checkboxSquare: {
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        borderWidth: 1,
        backgroundColor: COLORS.white,
        margin:2
    },
    checkboxText: {
        fontSize: SIZES.m,
        fontWeight: "bold"
    },
});

export default Checkbox;
