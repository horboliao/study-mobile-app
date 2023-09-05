import React from "react";
import * as Linking from 'expo-linking';
import {NavigationContainer} from "@react-navigation/native";
import Bar from "@/app/bar";

const prefix = Linking.createURL('/');

const Index = () => {
    const linking = {
        prefixes: [prefix],
    };
    return (
            <Bar/>
        // <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
        //     {/* content */}
        // </NavigationContainer>
    );
};

export default Index;
