import React from 'react';
import { Modal, TouchableOpacity, View, StyleSheet, Text } from 'react-native';
import {COLORS, SIZES} from "@/app/constants";

export const AnswerModal = ({ isModalVisible, toggleModal, explanation }) => {
    return (
        <Modal visible={isModalVisible} animationType="fade" transparent={true}>
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <View style={{flexDirection: "row", justifyContent: "space-between", marginBottom: 10}}>
                        <Text style={styles.closeButtonText}>Пояснення</Text>
                        <TouchableOpacity onPress={toggleModal}>
                            <Text style={styles.closeButtonText}>✕</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.explanation}>
                        {explanation}
                    </Text>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
    },
    modalContent: {
        backgroundColor: COLORS.dirtyWhite,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        padding: 15,
    },
    explanation: {
        fontSize: SIZES.s
    },
    closeButtonText: {
        fontSize: SIZES.l,
        fontWeight: 'bold',
    },
});

export default AnswerModal;
