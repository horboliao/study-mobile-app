import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import ButtonComponent from "@/components/ButtonComponent";
import {COLORS, SIZES} from "@/constants";
import Subject from "@/components/Subject";

interface SubjectsProps {
    setSubjects: (value: (((prevState: string[]) => string[]) | string[])) => void
    onNext: () => void
}

const Subjects: React.FC<SubjectsProps> = ({ setSubjects, onNext}) => {
    const subjects = ["Math", "Literature", "Ukrainian", "Biology", "Chemistry", "Physics", "English", "Geography", "History"]
    return (
        <View style={{backgroundColor: 'black'}}>
            <View style={styles.containerUp}>
                <Text style={styles.title}>Choose the required subjects</Text>
                <Text style={styles.subtitle}>You can always change your subject in your profile</Text>
            </View>
            <View style={styles.containerDown}>
                <View style={styles.subjectsContainer}>
                    {
                        subjects.map((subject) => {
                            return <Subject
                                label={subject}
                                key={subject}
                                onPress={() => setSubjects((prevSubjects) => [...prevSubjects, subject])}/>
                        })
                    }
                </View>
                <ButtonComponent title="Choose" onPress={onNext}/>
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
    subjectsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
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
export default Subjects;
