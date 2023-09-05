import React, { useState, useEffect, useCallback } from "react";
import { StyleSheet, Text } from "react-native";
import { useRoute } from "@react-navigation/core";
import Layout from "@/app/components/Layout";
import ProgressBar from "@/app/components/test/ProgressBar";
import ButtonComponent from "@/app/components/ButtonComponent";
import { questions } from "@/app/constants/questions";
import { AnswerModal } from "@/app/components/modals/AnswerModal";
import InputController from "@/app/components/test/input/InputController";
import {useNavigation} from "expo-router";

const TestScreen = () => {
    const route = useRoute();
    const { topic, taskCount } = route.params;
    const navigation = useNavigation();

    const [selectedTasks, setSelectedTasks] = useState([]);
    const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
    const [progress, setProgress] = useState(0);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const [taskState, setTaskState] = useState({
        isAnswerCorrect: null,
        isDescButtonVisible: false,
        goNextTask: false,
    });

    const toggleModal = useCallback(() => {
        setIsModalVisible((prevVisible) => !prevVisible);
    }, []);

    const handleCheckAnswer = (isCorrect) => {
        setTaskState((prevState) => ({
            ...prevState,
            isAnswerCorrect: isCorrect,
        }));
    };

    const handleNextTask = useCallback(() => {
        if (taskState.isAnswerCorrect || taskState.goNextTask) {
            if (currentTaskIndex < selectedTasks.length - 1) {
                setCurrentTaskIndex((prevIndex) => prevIndex + 1);
                setProgress((currentTaskIndex + 1) / selectedTasks.length);
                setTaskState((prevState) => ({
                    ...prevState,
                    isDescButtonVisible: false,
                    goNextTask: false,
                }));
            } else {
                navigation.navigate('testResults', {maxPoints: 39, scoredPoints: 3});
            }
        } else {
            setTaskState((prevState) => ({
                ...prevState,
                isDescButtonVisible: true,
                goNextTask: true,
            }));
        }
    }, [taskState.isAnswerCorrect, taskState.goNextTask, currentTaskIndex, selectedTasks.length]);

    useEffect(() => {
        if (taskCount > 0) {
            const shuffledTest = questions.slice();
            for (let i = shuffledTest.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffledTest[i], shuffledTest[j]] = [shuffledTest[j], shuffledTest[i]];
            }
            const selectedTasks = taskCount > questions.length ? shuffledTest : shuffledTest.slice(0, taskCount);
            setSelectedTasks(selectedTasks);
        }
    }, [taskCount]);

    useEffect(() => {
        if (selectedTasks.length > 0) {
            setCurrentTaskIndex(0);
            setProgress(0);
        }
    }, [selectedTasks]);

    const currentTask = selectedTasks[currentTaskIndex];

    if (!currentTask) {
        return null;
    }

    return (
        <Layout title={topic}>
            <ProgressBar
                progress={progress}
                currentTaskIndex={currentTaskIndex + 1}
                tasksLength={selectedTasks.length}
            />
            <Text style={styles.question}>{currentTask.questionText}</Text>
            <InputController
                currentTask={currentTask}
                handleCheckAnswer={handleCheckAnswer} />

            {taskState.isDescButtonVisible && (
                <ButtonComponent title={"Повторити теорію"} onPress={toggleModal} outline />
            )}

            <ButtonComponent
                title={currentTaskIndex === selectedTasks.length - 1 ? "Закінчити" : "Наступне завдання"}
                onPress={handleNextTask}
            />
            <AnswerModal
                isModalVisible={isModalVisible}
                toggleModal={toggleModal}
                explanation={currentTask.explanation}
            />
            {/* if answer incorrect or correct, show toast to inform about it*/}
        </Layout>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: "center",
    },
    progressContainer: {
        marginBottom: 20,
    },
    question: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
    },
});

export default TestScreen;
