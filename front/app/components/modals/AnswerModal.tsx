import React from 'react';
import { Modal, TouchableOpacity, View, StyleSheet, Text } from 'react-native';
import {COLORS, SIZES} from "@/app/constants";
import MyModal from "@/app/components/modals/MyModal";

interface AnswerModalProps {
    isModalVisible: boolean;
    toggleModal: () => void;
    explanation: string;
}

export const AnswerModal:React.FC<AnswerModalProps> = ({ isModalVisible, toggleModal, explanation }) => {
    return (
        <MyModal
            toggleModal={toggleModal}
            isModalVisible={isModalVisible}
            label={"Пояснення"}
        >
            <Text style={styles.explanation}>
                {explanation}
            </Text>
        </MyModal>

    );
};

const styles = StyleSheet.create({
    explanation: {
        fontSize: SIZES.s
    },
});

export default AnswerModal;
