import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Checkbox from "@/app/components/test/Checkbox";
import ChoiceOption from "@/app/components/test/ChoiceOption";
import {SIZES} from "@/app/constants";

interface CorrespondenceOptionProps {
    question: Question;
}

const CorrespondenceOption: React.FC<CorrespondenceOptionProps> = ({question,}) => {

    const handleCheckAnswer = (isCorrect: boolean) => {

    };

    return (
        <View>
            {
                question.examples?.map((example) => {
                    return (
                        <View
                            key={example.id}
                            style={styles.container}
                        >
                            <Text style={styles.text}>{example.id}</Text>
                            <ChoiceOption
                                options={question.options}
                                correctAnswer={example.correctAnswer}
                                onCheckAnswer={handleCheckAnswer}
                            />
                        </View>
                    )
                })
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: "flex-end"
    },
    text: {
        fontSize: SIZES.m,
        fontWeight: "bold",
        marginRight: 10,
        marginBottom:10
    }

});

export default CorrespondenceOption;
