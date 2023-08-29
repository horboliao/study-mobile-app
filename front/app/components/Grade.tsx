import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS, SIZES} from "@/app/constants";

interface GradeProps {
    title: string
    subtitle: string
    value: number
    selected: boolean
    onRadioBtnClick: (item: { title: string; subtitle: string; value: number; selected: boolean }) => void;
}

const Grade: React.FC<GradeProps> = ({title, subtitle, selected, value, onRadioBtnClick }) => {

    const handlePress = () => {
        onRadioBtnClick({ title, subtitle, value, selected: !selected })
    };

    return (
        <TouchableOpacity style={styles.container} onPress={handlePress}>
            <View>
                <Text style={styles.title}>
                    {title}
                </Text>
                <Text style={styles.subtitle}>
                    {subtitle}
                </Text>
            </View>
            <View style={styles.radioButton}>
                {selected ? <View style={styles.radioButtonIcon} /> : null}
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: SIZES.l,
        fontWeight: 'bold'
    },
    subtitle: {
        fontSize: SIZES.xs,
        color: COLORS.gray,
        marginTop: 5
    },
    container: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginTop: 15,
        borderRadius:15,
        backgroundColor: COLORS.white,
        justifyContent: 'space-between',
        flexDirection: "row",
        alignItems: "center"
    },
    radioButton: {
        height: 20,
        width: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: COLORS.gray,
        alignItems: "center",
        justifyContent: "center"
    },
    radioButtonIcon: {
        height: 14,
        width: 14,
        borderRadius: 7,
        backgroundColor: 'black'
    }
});

export default Grade;
