import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from "react-native";
import {COLORS, SIZES, subjects} from "@/constants";
import SubjectCover from "@/components/SubjectCover";

const SubjectsScreen = () => {
    return (
        <SafeAreaView style={{backgroundColor: 'black'}}>
            <View style={styles.containerUp}>
                <Text style={styles.title}>Hello, student</Text>
            </View>
            <View style={styles.containerDown}>
                <View style={styles.subjects}>
                    {
                        subjects.map((subject) => {
                            return (
                                <SubjectCover label={subject.label} color={subject.color} cover={subject.cover} key={subject.label}/>
                            )
                        })
                    }
                </View>
            </View>
        </SafeAreaView>

    );
};
const styles = StyleSheet.create({
    containerUp: {
        backgroundColor: COLORS.dirtyWhite,
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 15,
        paddingHorizontal: 15,
        paddingTop: 50,
        paddingBottom: 24,
    },
    containerDown: {
        backgroundColor: COLORS.dirtyWhite,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        paddingHorizontal: 15,
        paddingBottom: 70,
        marginTop:3,
        height: 716,
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
    subjects: {
        flexDirection: "row",
        marginVertical: 10
    }
})
export default SubjectsScreen;
