import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from "react-native";
import {COLORS, SIZES} from "@/constants";
import {math, ukrainian} from "@/constants/subjectsContents";
import ContentItem from "@/components/subject/ContentItem";
import {useRoute} from "@react-navigation/core";

const SubjectContent = () => {
    const route = useRoute();
    const { subjectName } = route.params;
    return (
        <SafeAreaView style={{backgroundColor: 'black'}}>
            <View style={styles.containerUp}>
                <Text style={styles.title}>{subjectName.toUpperCase()}</Text>
            </View>
            <View style={styles.containerDown}>
                <ScrollView contentContainerStyle={styles.subjectItems}>
                    {
                        ukrainian.map((subjectItem) => {
                            return (
                                <ContentItem label={subjectItem.label} units={subjectItem.units} key={subjectItem.label}/>
                            )
                        })
                    }
                </ScrollView>
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
        //height: 716,
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
        marginVertical: 15
    },
    label: {
        fontSize: SIZES.l,
        fontWeight: 'bold',
        marginTop: 20
    },
    subjectItems: {
        marginVertical: 10
    },
})
export default SubjectContent;
