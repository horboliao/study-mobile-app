import { Slider } from '@rneui/themed';
import Icon from "react-native-vector-icons/FontAwesome";
import {COLORS} from "@/app/constants";
import React from "react";

interface TaskSliderProps {
    taskCount: number;
    setTaskCount: React.Dispatch<React.SetStateAction<number>>;
}

const TaskSlider: React.FC<TaskSliderProps> = ({taskCount,setTaskCount}) => {

    return (
            <Slider
                value={taskCount}
                onValueChange={setTaskCount}
                maximumValue={100}
                minimumValue={1}
                step={1}
                orientation="horizontal"
                maximumTrackTintColor={COLORS.blue}
                minimumTrackTintColor={COLORS.blue}
                thumbStyle={{ height: 20, width: 16, backgroundColor: 'transparent' }}
                thumbProps={{
                    children: (
                        <Icon
                            name="circle"
                            type="font-awesome"
                            size={20}
                            containerStyle={{ bottom: 20, right: 20 }}
                            color={COLORS.blue}
                        />
                    ),
                }}
            />
    );
};

export default TaskSlider;
