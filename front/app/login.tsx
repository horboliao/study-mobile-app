import React, {useCallback, useState} from 'react';
import { SafeAreaView } from 'react-native';
import PhoneNumber from "@/components/login/PhoneNumber";
import Subjects from "@/components/login/Subjects";
import Grades from "@/components/login/Grades";
import {router} from "expo-router";

enum STEPS {
    NUMBER = 0,
    SUBJECTS = 1,
    GRADE = 2
}

const Login = () => {
    const [step, setStep] = useState(STEPS.NUMBER);
    const [number, setNumber] = useState('');
    const [password, setPassword] = useState('');
    const [subjects, setSubjects] = useState([])
    const [grade, setGrade] = useState(
        {
            title: "",
            subtitle: "",
            value: 0,
            selected: false});

    const onNext = useCallback(() => {
        setStep((value) => value + 1)
    }, []);

    const onSubmit = useCallback(async () => {
        if (step !== STEPS.GRADE) {
            return onNext();
        }
        const userObject = {
            subjects: subjects,
            phone: number,
            password: password,
            grade: grade.value,
        };
        console.log(userObject)
        setStep(STEPS.NUMBER);
        setNumber('');
        setPassword('');
        setSubjects([]);
        setGrade({
            title: "",
            subtitle: "",
            value: 0,
            selected: false
        });
        router.push('/home/')
    }, [step, number, subjects, grade]);

    let bodyContent = (<PhoneNumber
        onNext={onSubmit}
        number={number}
        setNumber={setNumber}
        password={password}
        setPassword={setPassword}
    />)

    if(step === STEPS.SUBJECTS) {
        bodyContent = (
            <Subjects
                onNext={onSubmit}
                setSubjects={setSubjects}
            />
        )
    }

    if(step === STEPS.GRADE) {
        bodyContent = (
            <Grades
                onNext={onSubmit}
                setGrade={setGrade}
            />
        );
    }

    return (
        <SafeAreaView>
            {bodyContent}
        </SafeAreaView>
    );
};

export default Login;
