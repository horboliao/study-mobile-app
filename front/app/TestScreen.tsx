import { useState, useEffect } from "react";
import { StyleSheet, Text } from "react-native";
import InputController from "@/app/components/test/InputController";
import { useRoute } from "@react-navigation/core";
import Layout from "@/app/components/Layout";
import ProgressBar from "@/app/components/test/ProgressBar";
import ButtonComponent from "@/app/components/ButtonComponent";
import {questions} from "@/app/constants/questions";

const TestScreen = () => {
    const route = useRoute();
    const { topic, taskCount } = route.params;
    const [selectedTasks, setSelectedTasks] = useState([]);
    const [currentTask, setCurrentTask] = useState(null)
    const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
    const [progress, setProgress] = useState(0);
    const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean | null>(null);

    const handleCheckAnswer = (isCorrect: boolean) => {
        setIsAnswerCorrect(isCorrect);
    };

    useEffect(() => {
        if (taskCount > 0) {
            const shuffledTest = [...questions];
            for (let i = shuffledTest.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffledTest[i], shuffledTest[j]] = [shuffledTest[j], shuffledTest[i]];
            }
            const selectedTasks = taskCount>questions.length ? shuffledTest : shuffledTest.slice(0, taskCount);
            setSelectedTasks(selectedTasks);
        }
    }, []);

    useEffect(() => {
        if (selectedTasks.length > 0) {
            setCurrentTask(selectedTasks[currentTaskIndex]);
        }
    }, [selectedTasks, currentTaskIndex]);

    const handleNextTask = () => {
        if (currentTaskIndex < selectedTasks.length - 1) {
            setCurrentTaskIndex(currentTaskIndex + 1);
            setProgress((currentTaskIndex + 1) / selectedTasks.length);
            setCurrentTask(selectedTasks[currentTaskIndex])
        }
        console.log(isAnswerCorrect)
    };

    if (!currentTask) {
        return null
    }

    return (
        <Layout title={topic}>
            <ProgressBar progress={(currentTaskIndex + 1) / selectedTasks.length} currentTaskIndex={currentTaskIndex + 1} tasksLength={selectedTasks.length}/>
            <Text style={styles.question}>{currentTask.questionText}</Text>
            <InputController currentTask={currentTask} handleCheckAnswer={handleCheckAnswer}/>
            <ButtonComponent title={ currentTaskIndex===selectedTasks.length - 1 ? "Закінчити" : "Наступне завдання"} onPress={handleNextTask} />
        </Layout>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
    },
    progressContainer: {
        marginBottom: 20,
    },
    question: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
});

export default TestScreen;
