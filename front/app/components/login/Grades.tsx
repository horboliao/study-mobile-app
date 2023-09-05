import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from "react-native";
import ButtonComponent from "@/app/components/ButtonComponent";
import {COLORS, SIZES} from "@/app/constants";
import Subject from "@/app/components/Subject";
import Grade from "@/app/components/Grade";
import Layout from "@/app/components/Layout";

interface GradesProps {
    setFormData: React.Dispatch<
        React.SetStateAction<{
            grade: {
                title: string,
                subtitle: string,
                value: number,
                selected: boolean,
            }
        }>
        >;
    onNext: () => void
}
const Grades: React.FC<GradesProps> = ({onNext,  setFormData}) => {
    const [grades, setGrades] = useState([
        {
            title: "11 grade",
            subtitle: "Preparation for IEE",
            value: 11,
            selected: false
        },
        {
            title: "10 grade",
            subtitle: "Preparation for IEE",
            value: 10,
            selected: false
        },
        {
            title: "9 grade",
            subtitle: "Preparation for SFC",
            value: 9,
            selected: false
        },]);
    const onRadioBtnClick = (item) => {
        let updatedState = grades.map((isLikedItem) =>
            isLikedItem.value === item.value
                ? { ...isLikedItem, selected: true }
                : { ...isLikedItem, selected: false }
        );
        setGrades(updatedState);
        setFormData((prevData) => ({ ...prevData, grade: item }));
    };
    return (
        <Layout title={"Оберіть ваш клас"} subtitle={"Ви завжди зможете змінити його у вашому профілі"}>
            <View style={styles.gradesContainer}>
                {
                    grades.map((grade) => {
                        return <Grade
                            title={grade.title}
                            key={grade.title}
                            subtitle={grade.subtitle}
                            selected={grade.selected}
                            value={grade.value}
                            onRadioBtnClick={onRadioBtnClick}
                        />
                    })
                }
            </View>
            <ButtonComponent title="Продовжити" onPress={onNext}/>
        </Layout>
    );
};
const styles = StyleSheet.create({
    containerUp: {
        backgroundColor: COLORS.dirtyWhite,
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 15,
        paddingHorizontal: 15,
        paddingTop: 140,
        paddingBottom: 24,
    },
    containerDown: {
        backgroundColor: COLORS.dirtyWhite,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        paddingHorizontal: 15,
        paddingBottom: 70,
        marginTop:3,
        height: 450,
        justifyContent: "space-between"

    },
    gradesContainer: {
        marginTop: 10,
    },
    title: {
        fontSize: SIZES.xl,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: SIZES.xs,
        color: 'grey',
    },
    buttonContainer: {
        backgroundColor: 'blue',
        paddingVertical: 12,
        borderRadius: 15,
        alignItems: 'center',
        marginBottom: 15,
    },
    buttonText: {
        color: 'white',
        fontSize: SIZES.xl,
        fontWeight: 'bold',
    },
});
export default Grades;
