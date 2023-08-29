import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import Toast from "react-native-simple-toast";
import { COLORS, SIZES } from "@/app/constants";
import {useRoute} from "@react-navigation/core";
import TaskType from "@/app/components/lesson/TaskType";
import {literature} from "@/app/constants/subjectsContents";
import Topic from "@/app/components/lesson/Topic";
import TasksCounter from "@/app/components/lesson/TasksCounter";
import TextbookItem from "@/app/components/lesson/TextbookItem";
import {mathlesson} from "@/app/constants/lesson";
import Layout from "@/app/components/Layout";
import {useNavigation} from "expo-router";

const Lesson = () => {
    const addSelectedField = (array) => {
        return array.map((item) => ({
            label: item.label,
            selected: false,
        }));
    };
    const [activeTab, setActiveTab] = useState("Video Lesson");
    const route = useRoute();
    const navigation = useNavigation();
    const { subjectName, unitTitle } = route.params;
    const [openTopicTest, setOpenTopicTest] = useState(false);
    const [openVariantTest, setOpenVariantTest] = useState(false);
    const [subjects, setSubjects] = useState(addSelectedField(literature));
    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };
    const onRadioBtnClick = (item) => {
        let updatedState = subjects.map((isLikedItem) =>
            isLikedItem.label === item.title
                ? { ...isLikedItem, selected: true }
                : { ...isLikedItem, selected: false }
        );
        setSubjects(updatedState);
    };
    const handleNavigateToTest = (count : number) => {
        if (count!==0) {
            const selected = subjects.find((s) => s.selected)
            navigation.navigate('TestScreen', {topic: selected.label, taskCount: count});
        }
        //Toast.show('This is a toast.', 500);
    };
    const renderContent = () => {
        switch (activeTab) {
            case "Video Lesson":
                return (
                    <View >
                        <View style={styles.videoContainer}>
                            {/*<YoutubePlayer*/}
                            {/*    height={300}*/}
                            {/*    videoId={'4FZp1XyylII'}*/}
                            {/*/>*/}
                        </View>
                        <Text style={styles.lessonTitle}>{unitTitle}</Text>
                    </View>
                );
            case "TextbookItem":
                return (
                    <ScrollView showsVerticalScrollIndicator={false}>
                        {
                            mathlesson.map((subtopic, index) => {
                                return (
                                    <TextbookItem content={subtopic.content} title={subtopic.title} key={index}/>
                                )
                            })
                        }
                    </ScrollView>
                );
            case "Tasks":
                return (
                    <>
                        {!openTopicTest && !openVariantTest && (
                            <View>
                                <TaskType
                                    label={"Колекція завдань"}
                                    description={"Ти можеш створити свій варіант тесту із нашої колекції завдань пщ конкретних розділах предмету, щоб цілеспрямовано готуватися по певних темах."}
                                    buttonLabel={"Створити свій варіант"}
                                    onPress={()=>{setOpenTopicTest(true)}}/>
                                <TaskType
                                    label={"Пробні варіанти ЗНО/НМТ"}
                                    description={"Ти можеш загальний тренувальний тест НМТ/ЗНО, щоб перевірити загальну підготовку до екзамену."}
                                    buttonLabel={"Вирішити пробний варіант"}
                                    onPress={()=>{}}/>
                            </View>
                        )

                        }
                        {openTopicTest && (
                            <>
                            <ScrollView style={{flex: 1}}>
                                {
                                    subjects.map((subject) => {
                                        return (
                                            <Topic
                                                title={subject.label}
                                                selected={subject.selected}
                                                onRadioBtnClick={onRadioBtnClick}
                                                key={subject.label}
                                            />
                                        )
                                    })
                                }

                            </ScrollView>
                            <TasksCounter onPress={handleNavigateToTest}/>
                            </>
                        )}
                        {openVariantTest && (
                            <View>

                            </View>
                        )}
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <Layout title={subjectName}>
            <View style={styles.tabContainer}>
                <TouchableOpacity
                    style={[styles.tab, activeTab === "Video Lesson" && styles.activeTab]}
                    onPress={() => handleTabChange("Video Lesson")}
                >
                    <Text style={[styles.tabText, activeTab === "Video Lesson" && styles.activeTabText]}>Video Lesson</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.tab, activeTab === "TextbookItem" && styles.activeTab]}
                    onPress={() => handleTabChange("TextbookItem")}
                >
                    <Text style={[styles.tabText, activeTab === "TextbookItem" && styles.activeTabText]}>Textbook</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.tab, activeTab === "Tasks" && styles.activeTab]}
                    onPress={() => handleTabChange("Tasks")}
                >
                    <Text style={[styles.tabText, activeTab === "Tasks" && styles.activeTabText]}>Tasks</Text>
                </TouchableOpacity>
            </View>
            {renderContent()}
        </Layout>
    );
};

const styles = StyleSheet.create({
    tabContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    tab: {
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    tabText: {
        fontSize: SIZES.m,
        color: COLORS.gray
    },
    activeTab: {
        borderBottomWidth: 2,
        borderBottomColor: COLORS.blue,
    },
    activeTabText: {
        color: COLORS.blue,
        fontWeight: 'bold',
    },
    videoContainer: {
        marginVertical: 15,
        height: 300,
        backgroundColor: COLORS.gray
    },
    lessonTitle: {
        fontSize: SIZES.s,
        fontWeight: 'bold',
    }
});

export default Lesson;
