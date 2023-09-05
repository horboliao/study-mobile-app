import React, {useState} from 'react';
import {StyleSheet, Text, View} from "react-native";
import {COLORS, SIZES} from "@/app/constants";
import Icon from "react-native-vector-icons/FontAwesome";
import TaskSlider from "@/app/components/filter/TaskSlider";

interface FilterItemProps {
    title: string;
    subtitle?: string;
    slider?: string
}

const FilterItem:React.FC<FilterItemProps> = ({title, subtitle, slider}) => {
    const [taskCount, setTaskCount] = useState(1);
    return (
        <View style={[styles.container, slider ? {flexDirection: 'column'} : null]}>
            <View style={{flexDirection: 'row', justifyContent: "space-between",}}>
                <Text style={styles.label}>{title}</Text>
                {
                    slider
                    ?
                        <Text style={styles.subtitle}>{taskCount}</Text>
                    :
                        null
                }
            </View>
            {
                slider
                    ?
                    <TaskSlider
                        taskCount={taskCount}
                        setTaskCount={setTaskCount}
                    />
                    :
                    <View style={{flexDirection: "row"}}>
                        <Text style={styles.subtitle}>{subtitle}</Text>
                        <Icon
                            name="angle-right"
                            size={20}
                            color={COLORS.gray}
                            style={{marginLeft: 10}}
                        />
                    </View>
            }
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 15,
        borderRadius: 15,
        backgroundColor: COLORS.white,
        marginBottom: 15
    },
    label: {
        fontSize: SIZES.s,
        fontWeight: 'bold'
    },
    subtitle: {
        fontSize: SIZES.s,
        color: COLORS.gray
    }
})
export default FilterItem;
