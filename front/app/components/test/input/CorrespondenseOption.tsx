import React, {useEffect, useState} from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Checkbox from "@/app/components/test/input/Checkbox";
import ChoiceOption from "@/app/components/test/input/ChoiceOption";
import {SIZES} from "@/app/constants";

interface CorrespondenceOptionProps {
    question: Question;
    onCheckAnswer: (isCorrect: boolean)=>void
}

const CorrespondenceOption: React.FC<CorrespondenceOptionProps> = ({question,onCheckAnswer}) => {
    const [exampleResults, setExampleResults] = useState<{ [exampleId: string]: boolean | undefined }>({});

    const handleCorrespondenceAnswer = (exampleId: string, isCorrect: boolean) => {
        setExampleResults(prevResults => ({
            ...prevResults,
            [exampleId]: isCorrect,
        }));
    };

    useEffect(()=> {
        const allTrue = Object.values(exampleResults).every(result => result === true);
        onCheckAnswer(allTrue);
    }, [exampleResults])

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
                                onCheckAnswer={(isCorrect) => handleCorrespondenceAnswer(example.id, isCorrect)}
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
