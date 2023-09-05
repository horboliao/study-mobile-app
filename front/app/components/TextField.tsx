import React, { useState } from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity } from 'react-native';
import { COLORS, SIZES } from '@/app/constants';
import Icon from 'react-native-vector-icons/FontAwesome';

interface TextFieldProps {
    value: string;
    placeholder: string;
    onChangeText: (text: string) => void;
    secure?: boolean;
    search?: boolean;
    onSearch?: () => void;
    onFilter?: () => void;
}

const TextField: React.FC<TextFieldProps> = ({
                                                 value,
                                                 placeholder,
                                                 onChangeText,
                                                 secure ,
                                                 search,
                                                 onSearch,
                                                 onFilter
                                             }) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    return (
        <View style={styles.inputContainer}>
            {search && (
                <TouchableOpacity
                    onPress={onSearch}
                    style={styles.iconContainer}
                >
                    <Icon name="search" size={20} color={COLORS.gray} />
                </TouchableOpacity>
            )}
            <TextInput
                style={[
                    styles.input,
                    search ? styles.searchInput : null,
                ]}
                placeholder={placeholder}
                placeholderTextColor={COLORS.gray}
                onChangeText={onChangeText}
                value={value}
                secureTextEntry={!showPassword && secure}
            />
            {secure && (
                <TouchableOpacity
                    onPress={togglePasswordVisibility}
                    style={styles.eyeIconContainer}
                >
                    <Icon name={showPassword ? 'eye' : 'eye-slash'} size={20} color={COLORS.gray} />
                </TouchableOpacity>
            )}
            {search && (
                <TouchableOpacity
                    onPress={onFilter}
                    style={styles.eyeIconContainer}
                >
                    <Icon name="filter" size={20} color={COLORS.gray} />
                </TouchableOpacity>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        position: 'relative',
    },
    input: {
        paddingVertical: 15,
        paddingHorizontal: 10,
        backgroundColor: COLORS.white,
        marginVertical: 5,
        borderRadius: 15,
        width: '100%',
        fontSize: SIZES.m,
    },
    searchInput: {
        paddingHorizontal: 40,
    },
    eyeIconContainer: {
        position: 'absolute',
        top: '50%',
        right: 15,
        transform: [{ translateY: -10 }],
    },
    iconContainer: {
        position: 'absolute',
        top: '50%',
        left: 15,
        transform: [{ translateY: -10 }],
    },
});

export default TextField;
