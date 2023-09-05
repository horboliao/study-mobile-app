import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { COLORS, SIZES } from '@/app/constants';
import Icon from "react-native-vector-icons/FontAwesome";
import {useNavigation} from "expo-router";

interface ContentItemProps {
    label: string;
    units: string[];
}

const ContentItem: React.FC<ContentItemProps> = ({ label, units }) => {
    const [isPositive, setIsPositive] = useState(true);
    const [isExpanded, setIsExpanded] = useState(false);
    const navigation = useNavigation();

    const handleToggleSign = () => {
        setIsPositive(!isPositive);
        setIsExpanded(!isExpanded);
    };

    const handleNavigateToLesson = (unit: string) => {
        navigation.navigate('lesson', { subjectName: label, unitTitle: unit });
        //navigation.navigate('testScreen', {topic: selected.label, taskCount: count});
    };

    return (
        <View>
            <TouchableOpacity
                onPress={handleToggleSign}
                style={[
                    styles.container,
                    {
                        backgroundColor: isPositive ? COLORS.white : COLORS.blue,
                        borderBottomRightRadius: isPositive ? 15 : 0,
                        borderBottomLeftRadius: isPositive ? 15: 0
                    },
                ]}
            >
                <Text
                    style={[
                        styles.label,
                        {
                            color: isPositive ? 'black' : COLORS.white,
                        },
                    ]}
                >
                    {label}
                </Text>
                <View
                    style={[
                        styles.button,
                        {
                            borderColor: isPositive ? 'black' : COLORS.white,
                            backgroundColor: isPositive ? COLORS.white : COLORS.blue,
                        },
                    ]}
                >
                    <Text
                        style={[
                            styles.buttonText,
                            { color: isPositive ? 'black' : COLORS.white },
                        ]}
                    >
                        {isPositive ? '+' : '-'}
                    </Text>
                </View>
            </TouchableOpacity>

            {isExpanded && (
                <View style={styles.unitList} >
                    {units.map((unit, index) => (
                        <TouchableOpacity
                            style={styles.lesson}
                            key={index}
                            onPress={() => handleNavigateToLesson(unit)}>
                            <Text style={styles.unitText}>
                                {unit}
                            </Text>
                            <Icon name="angle-right" size={20} color="black" style={{marginLeft: 10}}/>
                        </TouchableOpacity>
                    ))}
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
        paddingHorizontal: 20,
        borderTopLeftRadius:15,
        borderTopRightRadius:15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 2,
    },
    label: {
        fontSize: SIZES.m,
        fontWeight: 'bold',
    },
    button: {
        height: 30,
        width: 30,
        borderRadius: 15,
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: SIZES.s,
        fontWeight: 'bold',
    },
    unitList: {
        backgroundColor: COLORS.white,
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 15
    },
    unitText: {
        fontSize: SIZES.s,
        marginBottom: 5,
    },
    lesson: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: "space-between",
    }
});

export default ContentItem;
