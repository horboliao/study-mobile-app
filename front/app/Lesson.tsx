import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { COLORS, SIZES } from "@/constants";

const Lesson = () => {
    const [activeTab, setActiveTab] = useState("Video Lesson");

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <SafeAreaView style={{ backgroundColor: 'black' }}>
            <View style={styles.containerUp}>
                <Text style={styles.title}>Math</Text>
            </View>
            <View style={styles.containerDown}>
                <View style={styles.tabContainer}>
                    <TouchableOpacity
                        style={[styles.tab, activeTab === "Video Lesson" && styles.activeTab]}
                        onPress={() => handleTabChange("Video Lesson")}
                    >
                        <Text style={[styles.tabText, activeTab === "Video Lesson" && styles.activeTabText]}>Video Lesson</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.tab, activeTab === "Textbook" && styles.activeTab]}
                        onPress={() => handleTabChange("Textbook")}
                    >
                        <Text style={[styles.tabText, activeTab === "Textbook" && styles.activeTabText]}>Textbook</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.tab, activeTab === "Tasks" && styles.activeTab]}
                        onPress={() => handleTabChange("Tasks")}
                    >
                        <Text style={[styles.tabText, activeTab === "Tasks" && styles.activeTabText]}>Tasks</Text>
                    </TouchableOpacity>
                </View>
                {/* Тут ви можете відображати контент для обраної вкладки */}
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
        marginTop: 3,
    },
    title: {
        fontSize: SIZES.xl,
        fontWeight: 'bold',
    },
    tabContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
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
});

export default Lesson;
