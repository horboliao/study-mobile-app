import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from "react-native";
import {COLORS, SIZES, subjects} from "@/constants";
import SubjectCover from "@/components/subject/SubjectCover";
import Layout from "@/components/Layout";

const SubjectsScreen = () => {
    return (
        <Layout title={"Hello, student"} >
            <Text style={styles.label}>Choose your subject</Text>
            <ScrollView
                horizontal
                contentContainerStyle={styles.subjects}
                showsHorizontalScrollIndicator={false}>
                {
                    subjects.map((subject) => {
                        return (
                            <SubjectCover label={subject.label} color={subject.color} cover={subject.cover} key={subject.label}/>
                        )
                    })
                }
            </ScrollView>
        </Layout>
    );
};
const styles = StyleSheet.create({
    subjects: {
        flexDirection: "row",
        marginVertical: 10
    },
    label: {
        fontSize: SIZES.l,
        fontWeight: 'bold',
        marginTop: 20
}
})
export default SubjectsScreen;
