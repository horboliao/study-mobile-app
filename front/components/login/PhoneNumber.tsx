import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import TextField from "@/components/TextField";
import ButtonComponent from "@/components/ButtonComponent";
import {COLORS, SIZES} from "@/constants";

interface PhoneNumberProps {
    number: string
    setNumber: (text:string) => void
    password: string
    setPassword: (text:string) => void
    onNext: () => void
}

const PhoneNumber: React.FC<PhoneNumberProps> =({number, setNumber, password,setPassword, onNext}) => {
    return (
        <View style={{paddingHorizontal: 15}}>
            <Text style={styles.logo}>STUDY</Text>
            <View style={{marginBottom: 10}}>
                <Text style={styles.title}>Login</Text>
                <Text style={styles.subtitle}>
                    Enter your phone number, and we will send you SMS with code.
                </Text>
            </View>
            <TextField
                placeholder="+38(___)___-__-__"
                onChangeText={setNumber}
                value={number}/>
            <TextField
                placeholder="Password"
                onChangeText={setPassword}
                value={password}
                secure/>
            <ButtonComponent title="Confirm" onPress={onNext}/>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: COLORS.dirtyWhite,
    },
    logo: {
        fontSize: 60,
        fontWeight: 'bold',
    },
    title: {
        fontSize: SIZES.xxl,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: SIZES.xs,
        color: 'grey',
    },
    warning: {
        marginTop: 10,
        fontSize: SIZES.xs,
    }
});
export default PhoneNumber;
