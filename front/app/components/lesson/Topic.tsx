import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS, SIZES} from "@/app/constants";

interface TopicProps {
    title: string
    selected: boolean
    onRadioBtnClick: (item: { title: string; selected: boolean }) => void;
}

const Topic: React.FC<TopicProps> = ({title,  selected, onRadioBtnClick }) => {
    const handlePress = () => {
        onRadioBtnClick({ title, selected: !selected })
    };

    return (
        <TouchableOpacity style={styles.container} onPress={handlePress}>
            <View>
                <Text style={styles.title}>
                    {title}
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
        fontSize: SIZES.s,
        fontWeight: 'bold'
    },
    container: {
        paddingVertical: 20,
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

export default Topic;
