import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import {COLORS, SIZES} from "@/app/constants";

interface CustomComponentProps {
    title: string;
    subtitle?: string;
    children: JSX.Element | null | false;
}

const CustomComponent: React.FC<CustomComponentProps> = ({ title, subtitle, children }) => {
    return (
        <SafeAreaView style={{ backgroundColor: 'black' , flex: 1}}>
            <View style={styles.containerUp}>
                <Text style={styles.title}>{title}</Text>
                {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
            </View>
            <View style={styles.containerDown}>
                {children}
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
        flex: 1,
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
    subtitle: {
        fontSize: SIZES.xs,
        color: 'grey',
    }
});

export default CustomComponent;
