import {Dimensions, Text, StyleSheet, View} from "react-native";
import { ProgressChart } from 'react-native-chart-kit';
import {COLORS, SIZES} from "@/app/constants";
import React from "react";

interface StatisticsChartProps {
    percentage: number
}

const StatisticsChart:React.FC<StatisticsChartProps> = ({percentage}) => {
    const data = {
        labels: ["Набрана кількість балів"],
        data: [percentage]
    };
    return (
        <View>
            <Text style={styles.percentageText}>{`${(percentage * 100).toFixed(0)}%`}</Text>
            <ProgressChart
                data={data}
                width={180}
                height={180}
                strokeWidth={40}
                radius={64}
                chartConfig={chartConfig}
                hideLegend={true}
            />
            </View>
    );
};
const chartConfig = {
    backgroundGradientFrom: 'transparent',
    backgroundGradientTo:'transparent',
        color: (opacity = 1) => `rgba(63, 82, 216, ${opacity})`,
};
const styles = StyleSheet.create({
    percentageText: {
        position: 'absolute',
        top: '40%',
        left: '40%',
        fontSize: SIZES.xl,
        fontWeight: 'bold',
        color: COLORS.blue
    },
});

export default StatisticsChart;
