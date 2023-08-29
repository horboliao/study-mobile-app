import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import {COLORS, SIZES} from "@/app/constants";
import {useNavigation} from "expo-router";
import Icon from "react-native-vector-icons/FontAwesome";

interface TaskTypeProps {
    label: string,
    description: string,
    buttonLabel: string,
    onPress: ()=>void
}

const TaskType:React.FC< TaskTypeProps> = ({ label, description, buttonLabel, onPress }) => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>{label}</Text>
            </View>
            <View style={styles.content}>
                <Text style={styles.description}>{description}</Text>
                <TouchableOpacity onPress={onPress} style={styles.link}>
                    <Text style={styles.linkText}>{buttonLabel}</Text>
                    <View style={styles.iconCircle}>
                        <Icon name="angle-right" size={14} color={COLORS.white} />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 15,
        backgroundColor: COLORS.white,
        overflow: 'hidden',
        margin: 15,
    },
    header: {
        backgroundColor: COLORS.blue,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    title: {
        color: COLORS.white,
        fontSize: SIZES.l,
    },
    content: {
        padding: 15,
    },
    description: {
        fontSize: SIZES.s,
        marginBottom: 10,
    },
    link: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    linkText: {
        fontSize: SIZES.s,
        fontWeight: 'bold',
        marginRight: 5,
    },
    iconCircle: {
        width: 16,
        height: 16,
        borderRadius: 20,
        backgroundColor: COLORS.gray,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 4
    },
});

export default TaskType;
