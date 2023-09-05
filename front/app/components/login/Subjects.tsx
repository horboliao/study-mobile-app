import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import ButtonComponent from "@/app/components/ButtonComponent";
import {COLORS, SIZES, subjects} from "@/app/constants";
import Subject from "@/app/components/Subject";
import Layout from "@/app/components/Layout";

interface SubjectsProps {
    formData: {
        subjects: string[];
    };
    setFormData: React.Dispatch<
        React.SetStateAction<{
            subjects: string[];
        }>
        >;
    onNext: () => void
}

const Subjects: React.FC<SubjectsProps> = ({  formData, setFormData, onNext}) => {

    const handleSubjectSelect = (selectedSubject: string) => {
        const isSubjectSelected = formData.subjects.includes(selectedSubject);

        if (isSubjectSelected) {
            setFormData((prevFormData) => ({
                ...prevFormData,
                subjects: prevFormData.subjects.filter((subject) => subject !== selectedSubject),
            }));
        } else {
            setFormData((prevFormData) => ({
                ...prevFormData,
                subjects: [...prevFormData.subjects, selectedSubject],
            }));
        }
    };

    return (
        <Layout
            title={"Виберіть необхідні вам предмети"}
            subtitle={"Ви завжди можете змінити предмети у вашому профілі"}
        >
            <View style={styles.subjectsContainer}>
                {
                    subjects.map((subject) => {
                        return <Subject
                            label={subject.label}
                            key={subject.label}
                            onPress={() => handleSubjectSelect(subject.label)}/>
                    })
                }
            </View>
            <ButtonComponent title="Обрати" onPress={onNext}/>
        </Layout>
    );
};
const styles = StyleSheet.create({
    subjectsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 10,
    }
});
export default Subjects;
