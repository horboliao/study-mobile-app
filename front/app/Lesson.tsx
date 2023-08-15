import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import { COLORS, SIZES } from "@/constants";
import {useRoute} from "@react-navigation/core";
import TaskType from "@/components/lesson/TaskType";
import {literature} from "@/constants/subjectsContents";
import Grade from "@/components/Grade";
import Topic from "@/components/lesson/Topic";
import TasksCounter from "@/components/lesson/TasksCounter";
import TextbookItem from "@/components/lesson/TextbookItem";
import {mathlesson} from "@/constants/lesson";

const Lesson = () => {
    const addSelectedField = (array) => {
        return array.map((item) => ({
            label: item.label,
            selected: false,
        }));
    };
    const [activeTab, setActiveTab] = useState("Video Lesson");
    const route = useRoute();
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
                    <View>
                        {
                            mathlesson.map((subtopic, index) => {
                                return (
                                    <TextbookItem content={subtopic.content} title={subtopic.title} key={index}/>
                                )
                            })
                        }
                    </View>
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
                            <View>
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

                            </View>
                            <TasksCounter/>
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
        <SafeAreaView style={{ backgroundColor: 'black' }}>
            <View style={styles.containerUp}>
                <Text style={styles.title}>{subjectName}</Text>
            </View>
            <ScrollView style={styles.containerDown}>
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
            </ScrollView>
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
        padding: 15,
        marginTop: 3,
    },
    title: {
        fontSize: SIZES.xl,
        fontWeight: 'bold',
    },
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
