import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import TextField from "@/app/components/TextField";
import ButtonComponent from "@/app/components/ButtonComponent";
import {COLORS, SIZES} from "@/app/constants";

interface PhoneNumberProps {
    formData: {
        number: string;
        password: string;
    };
    setFormData: React.Dispatch<
        React.SetStateAction<{
            number: string;
            password: string;
        }>
        >;
    onNext: () => void
}

const PhoneNumber: React.FC<PhoneNumberProps> =({formData, setFormData, onNext}) => {
    const { number, password } = formData;

    const handleNumberChange = (text: string) => {
        setFormData((prevData) => ({ ...prevData, number: text }));
    };

    const handlePasswordChange = (text: string) => {
        setFormData((prevData) => ({ ...prevData, password: text }));
    };

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
                onChangeText={handleNumberChange}
                value={number}/>
            <TextField
                placeholder="Password"
                onChangeText={handlePasswordChange}
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
