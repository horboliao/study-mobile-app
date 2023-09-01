import {StyleSheet, View} from "react-native";
import React, {useState} from "react";
import ChoiceOption from "@/app/components/test/input/ChoiceOption";
import TextOption from "@/app/components/test/input/TextOption";
import CorrespondenceOption from "@/app/components/test/input/CorrespondenseOption";
import {questionType} from "@/app/constants/questions";

interface CorrespondenceQuestionProps {
    currentTask: Question
    handleCheckAnswer: (boolean)=>void
}

const InputController:React.FC<CorrespondenceQuestionProps> = ({currentTask , handleCheckAnswer }) => {

    const renderInput = () => {
        switch (currentTask.questionType) {
            case questionType.singleChoice:
                return (
                    <ChoiceOption options={currentTask.options} onCheckAnswer={handleCheckAnswer}/>
                );
            case questionType.multiChoice:
                return (
                    <ChoiceOption options={currentTask.options} multi onCheckAnswer={handleCheckAnswer}/>
                );
            case questionType.correspondence:
                return (
                    <CorrespondenceOption question={currentTask} onCheckAnswer={handleCheckAnswer}/>
                );
            case questionType.numericInput:
                return (
                    <TextOption onCheckAnswer={handleCheckAnswer} correctAnswer={currentTask.correctAnswer}/>
                );
            default:
                return null;
        }
    }
    return (
            <View>
                {renderInput()}
            </View>
    );
};
export default InputController;
