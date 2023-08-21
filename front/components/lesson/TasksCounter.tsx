import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { COLORS, SIZES } from '@/constants';
interface TasksCounterProps {
    onPress: (number) => void
}
const TasksCounter:React.FC<TasksCounterProps> = ({onPress}) => {
    const [count, setCount] = useState(0);

    const handleDecrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };
    const handleIncrement = () => {
        setCount(count + 1);
    };

    return (
        <View style={styles.container}>
            <View style={styles.counterContainer}>
                <TouchableOpacity onPress={handleDecrement} style={styles.iconButton}>
                    <Icon name="minus" size={20} color="black" />
                </TouchableOpacity>
                <Text style={styles.count}>{count}</Text>
                <TouchableOpacity onPress={handleIncrement} style={styles.iconButton}>
                    <Icon name="plus" size={20} color="black" />
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={()=>{onPress(count)}} style={styles.applyButton}>
                <Text style={styles.applyButtonText}>Застосувати</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 15,
        backgroundColor: COLORS.white,
        zIndex: 9999,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15
    },
    counterContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius:35,
        borderWidth: 1
    },
    iconButton: {
        padding: 10,
        marginHorizontal: 5,
    },
    count: {
        fontSize: SIZES.l,
        fontWeight: 'bold',
    },
    applyButton: {
        backgroundColor: "black",
        borderRadius: 35,
        paddingVertical: 10,
        paddingHorizontal: 30,
    },
    applyButtonText: {
        color: COLORS.white,
        fontSize: SIZES.m,
        fontWeight: 'bold',
    },
});

export default TasksCounter;
