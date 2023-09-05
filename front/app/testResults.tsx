import React from 'react';
import {Text, View, StyleSheet} from "react-native";
import Layout from "@/app/components/Layout";
import {useRoute} from "@react-navigation/core";
import StatisticsChart from "@/app/components/test/result/StatisticsChart";
import {SIZES} from "@/app/constants";

const TestResults = () => {
    const router = useRoute();
    const {maxPoints, scoredPoints} = router.params

    return (
        <Layout title={"Результати"}>
            <Text style={styles.text}>Максимальна кількість балів: {maxPoints}</Text>
            <Text style={styles.text}>Набрана кількість балів: {scoredPoints}</Text>
            <View style={{ alignItems: "center", marginTop: 5}}>
                <StatisticsChart percentage={scoredPoints/maxPoints}/>
            </View>
        </Layout>
    );
};
const styles = StyleSheet.create({
    text: {
        fontSize: SIZES.m,
        fontWeight: "bold",
        marginBottom: 5
    }
})
export default TestResults;
