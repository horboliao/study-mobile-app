import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { COLORS, SIZES } from '@/constants';

interface ContentItemProps {
    label: string;
    units: object;
}

const ContentItem: React.FC<ContentItemProps> = ({ label, units }) => {
    const [isPositive, setIsPositive] = useState(true);

    const handleToggleSign = () => {
        setIsPositive(!isPositive);
    };

    return (
        <TouchableOpacity
            onPress={handleToggleSign}
            style={[
                styles.container,
                {
                    backgroundColor: isPositive ? COLORS.white : COLORS.blue,
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
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
        paddingHorizontal: 20,
        borderRadius: 15,
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
});

export default ContentItem;
