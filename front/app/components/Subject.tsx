import React, {useState} from 'react';
import {StyleSheet,Text, View} from 'react-native';
import {COLORS, SIZES} from "@/app/constants";
import {TouchableOpacity} from "react-native";

interface SubjectProps {
    label: string
    onPress: () => void
}

const Subject: React.FC<SubjectProps> = ({label, onPress}) => {
    const [pressed, setPressed] = useState(false);

    const handlePress = () => {
        setPressed(!pressed);
        onPress();
    };

    const containerStyle = [
        styles.container,
        { backgroundColor: pressed ? COLORS.blue : COLORS.white,
        color: pressed ? COLORS.white :  COLORS.gray,
        borderColor: pressed ? COLORS.blue : COLORS.lightGray},
    ];

    return (
        <TouchableOpacity onPress={handlePress}>
            <Text style={containerStyle}>
                {label}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        margin: 2,
        borderRadius:20,
        fontSize: SIZES.s,
        borderWidth: 1,
    },
});

export default Subject;
