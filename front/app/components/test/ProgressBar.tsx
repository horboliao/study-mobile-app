import React, { useEffect } from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Animated, { Easing, useSharedValue, withTiming } from 'react-native-reanimated';
import {COLORS, SIZES} from "@/app/constants";

const ProgressBar = ({ progress, currentTaskIndex, tasksLength}) => {
    const width = useSharedValue(0);

    useEffect(() => {
        width.value = withTiming(progress * 100, {
            duration: 500,
            easing: Easing.inOut(Easing.ease),
        });
    }, [progress]);

    return (
        <View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Пройдено</Text>
                <Text style={styles.text}>{currentTaskIndex}/{tasksLength}</Text>
            </View>
            <View style={styles.progressBar}>
                <Animated.View style={[styles.progress, { width: `${width.value}%` }]} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    progressBar: {
        height: 10,
        backgroundColor: 'lightgray',
        borderRadius: 5,
        overflow: 'hidden',
        marginBottom: 10,
    },
    progress: {
        height: '100%',
        backgroundColor: COLORS.green,
        borderRadius: 5,
    },
    textContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 4
    },
    text: {
        color: COLORS.gray,
        fontSize: SIZES.xs,
    }
});

export default ProgressBar;
