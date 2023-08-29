import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from "react-native";
import {COLORS, SIZES} from "@/app/constants";
import {math, ukrainian} from "@/app/constants/subjectsContents";
import ContentItem from "@/app/components/subject/ContentItem";
import {useRoute} from "@react-navigation/core";
import Layout from "@/app/components/Layout";

const SubjectContent = () => {
    const route = useRoute();
    const { subjectName } = route.params;
    return (
        <Layout title={subjectName.toUpperCase()}>
            <ScrollView contentContainerStyle={styles.subjectItems} showsVerticalScrollIndicator={false}>
                {
                    ukrainian.map((subjectItem) => {
                        return (
                            <ContentItem label={subjectItem.label} units={subjectItem.units} key={subjectItem.label}/>
                        )
                    })
                }
            </ScrollView>
        </Layout>
    );
};
const styles = StyleSheet.create({
    subjectItems: {
        marginVertical: 10
    },
})
export default SubjectContent;
