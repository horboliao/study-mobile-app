import React, {useState} from 'react';
import { StyleSheet, TextInput} from 'react-native';
import {COLORS, SIZES} from "@/app/constants";

interface TextOptionProps {
    correctAnswer: string | undefined
    onCheckAnswer: (isCorrect: boolean)=>void
}
const TextOption:React.FC<TextOptionProps> = ({ onCheckAnswer,correctAnswer }) => {
    const [answer, setAnswer] = useState("");

    const handleAnswer = (input: string) => {
        setAnswer(input)
        onCheckAnswer(correctAnswer === input);
    }
    return (
        <TextInput
            value={answer}
            onChangeText={handleAnswer}
            placeholder="Введіть відповідь"
            style={styles.answerInput}
            placeholderTextColor={COLORS.gray}
        />
    );
};

const styles = StyleSheet.create({
    answerInput: {
        borderWidth: 1,
        borderColor: COLORS.gray,
        padding: 10,
        marginBottom: 20,
        borderRadius:15,
        backgroundColor: COLORS.white,
        fontSize: SIZES.s
    },
});

export default TextOption;
