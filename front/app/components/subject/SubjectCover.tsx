import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import {SIZES} from "@/app/constants";
import {useNavigation} from "expo-router";

interface SubjectCoverProps {
    label: string,
    color: string,
    cover: object
}

const SubjectCover:React.FC< SubjectCoverProps> = ({ label, cover, color }) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity onPress={()=> {navigation.navigate("SubjectContent", { subjectName: label.toLowerCase() })}} style={styles.container}>
            <View style={styles.rectangle}>
                <View style={{
                    backgroundColor: color,
                    width: 120,
                    height: 100,
                    borderRadius: 15,
                    alignItems: 'center',
                    justifyContent: 'center'}}>
                    <Image source={cover} />
                </View>
                <Text style={styles.subjectText}>{label}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    rectangle: {
        margin: 2
    },
    subjectText: {
        fontSize: SIZES.m,
        fontWeight: 'bold'
    },



    modalContent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    closeButton: {
        backgroundColor: 'lightgray',
        padding: 10,
        borderRadius: 5,
    },
    closeButtonText: {
        fontSize: 18,
        color: 'black',
    },
});

export default SubjectCover;
