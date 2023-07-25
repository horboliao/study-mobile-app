import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from "react-native";
import ButtonComponent from "@/components/ButtonComponent";
import {COLORS, SIZES} from "@/constants";
import Subject from "@/components/Subject";
import Grade from "@/components/Grade";

interface GradesProps {
    setGrade: (item)=>void
    onNext: () => void
}
const Grades: React.FC<GradesProps> = ({onNext, setGrade}) => {
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
        setGrade(item);
    };
    return (
        <View style={{backgroundColor: 'black'}}>
            <View style={styles.containerUp}>
                <Text style={styles.title}>Choose your grade</Text>
                <Text style={styles.subtitle}>You can always change your grade in your profile</Text>
            </View>
            <View style={styles.containerDown}>
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
                <ButtonComponent title="Continue" onPress={onNext}/>
            </View>
        </View>
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
