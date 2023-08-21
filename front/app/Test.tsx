import { useState, useEffect } from "react";
import { Button, View, StyleSheet, Text } from "react-native";
import AnswerInput from "@/components/test/AnswerInput";
import { useRoute } from "@react-navigation/core";
import Layout from "@/components/Layout";
import ProgressBar from "@/components/test/ProgressBar";
import ButtonComponent from "@/components/ButtonComponent";
import { COLORS, SIZES } from "@/constants";
import {test} from "@/constants/test";

const Test = () => {
    const route = useRoute();
    const { topic, taskCount } = route.params;
    const [selectedTasks, setSelectedTasks] = useState([]);
    const [currentTask, setCurrentTask] = useState(null)
    const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
    const [answer, setAnswer] = useState('');
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (taskCount > 0 && taskCount <= test.length) {
            const shuffledTest = [...test]; // Create a copy of the test array
            for (let i = shuffledTest.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffledTest[i], shuffledTest[j]] = [shuffledTest[j], shuffledTest[i]]; // Shuffle the array
            }

            const selectedTasks = shuffledTest.slice(0, taskCount); // Select the first taskCount questions

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
            setAnswer('');
            setProgress((currentTaskIndex + 1) / selectedTasks.length);
            setCurrentTask(selectedTasks[currentTaskIndex])
        }
    };

    if (!currentTask) {
        return null
    }

    return (
        <Layout title={topic}>
            <ProgressBar progress={(currentTaskIndex + 1) / selectedTasks.length} currentTaskIndex={currentTaskIndex + 1} tasksLength={selectedTasks.length}/>
            <Text style={styles.question}>{currentTask.questionText}</Text>
            <AnswerInput answer={answer} onChange={setAnswer} />
            <ButtonComponent title="Наступне завдання" onPress={handleNextTask} />
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

export default Test;
