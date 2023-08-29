import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
interface ToastProps {
    message: string
    duration: number
    onClose: () => void
}
const Toast:React.FC<ToastProps> = ({ message, duration = 3000, onClose }) => {
    const [fadeAnim] = useState(new Animated.Value(0));

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
        }).start();

        const timeout = setTimeout(() => {
            onClose();
        }, duration);

        return () => {
            clearTimeout(timeout);
        };
    }, []);

    const handlePress = () => {
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
        }).start(() => {
            onClose();
        });
    };

    return (
        <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
            <TouchableOpacity style={styles.toast} onPress={handlePress}>
                <Text style={styles.message}>{message}</Text>
            </TouchableOpacity>
        </Animated.View>
    );
};

const App = () => {
    const [toastVisible, setToastVisible] = useState(false);

    const showToast = () => {
        setToastVisible(true);
    };

    const hideToast = () => {
        setToastVisible(false);
    };

    return (
        <View style={styles.appContainer}>
            <TouchableOpacity style={styles.button} onPress={showToast}>
                <Text>Show Toast</Text>
            </TouchableOpacity>
            {toastVisible && <Toast message="Повідомлення успішно" onClose={hideToast} />}
        </View>
    );
};

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#007BFF',
        padding: 10,
        borderRadius: 5,
    },
    container: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20,
        alignItems: 'center',
    },
    toast: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        padding: 10,
        borderRadius: 5,
    },
    message: {
        color: '#FFFFFF',
    },
});

export default App;
