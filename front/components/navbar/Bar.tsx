import React from 'react';
import {Pressable, View, Image, StyleSheet} from "react-native";
import {COLORS, icons} from "@/constants";
import MenuItemBox from "@/components/MenuItemBox";

export const menuItems = [
    {
        label: 'Profile',
        icon: icons.user
    },
    {
        label: 'Search',
        icon: icons.search
    },
    {
        label: 'My courses',
        icon: icons.cap
    },
    {
        label: 'Subjects',
        icon: icons.book
    }
]

const Bar = () => {
    return (
        <View style={styles.container}>
            {
                menuItems.map((item) => {
                    return <MenuItemBox
                        label={item.label}
                        icon={item.icon}
                        key={item.label}/>
                })
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: 50,
        justifyContent: 'space-between',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        backgroundColor: COLORS.white
    }
});
export default Bar;
