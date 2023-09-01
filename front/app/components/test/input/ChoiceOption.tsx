import React, {useEffect, useState} from 'react';
import { View, StyleSheet } from 'react-native';
import {COLORS, SIZES} from "@/app/constants";
import Checkbox from "@/app/components/test/input/Checkbox";

interface ChoiceOptionProps {
    options: Option[]
    multi?: boolean
    onCheckAnswer: (isCorrect: boolean)=>void
    correctAnswer?: string
}

const ChoiceOption:React.FC<ChoiceOptionProps> = ({ options, multi, onCheckAnswer, correctAnswer}) => {
    const [selectedOptions, setSelectedOptions] = useState<Set<Option>>(new Set());

    const toggleOption = (option: Option) => {
        if (multi) {
            const updatedSelection = new Set(selectedOptions);
            if (updatedSelection.has(option)) {
                updatedSelection.delete(option);
            } else {
                updatedSelection.add(option);
            }
            setSelectedOptions(updatedSelection);
        } else {
            setSelectedOptions(new Set([option]));
        }
    };

    useEffect(() => {
        if (correctAnswer) {
            const selectedOption = selectedOptions.size > 0 ? Array.from(selectedOptions)[0] : null;
            onCheckAnswer(selectedOption ? selectedOption.id === correctAnswer : false);
        } else {
            const selectedIds = Array.from(selectedOptions).map(option => option.id);
            const correctIds = options.filter(option => option.isCorrect).map(option => option.id);
            const isCorrect = JSON.stringify(selectedIds) === JSON.stringify(correctIds);
            onCheckAnswer(isCorrect);
        }
    },[selectedOptions]);

    return (
        <View style={styles.container}>
            {options.map((option, index) => (
                <Checkbox
                    key={index}
                    option={option}
                    toggleOption={toggleOption}
                    selectedOptions={selectedOptions}
                />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row"
    },
});

export default ChoiceOption;
