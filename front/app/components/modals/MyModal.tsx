import React, {ReactNode} from 'react';
import {Modal, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {COLORS, SIZES} from "@/app/constants";

interface MyModalProps {
    isModalVisible: boolean;
    toggleModal: ()=>void;
    label: string;
    children: ReactNode;
}

const MyModal: React.FC<MyModalProps> = ({isModalVisible, toggleModal, label, children}) => {
    return (
        <Modal
            visible={isModalVisible}
            animationType="fade"
            transparent={true}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            marginBottom: 10}}
                    >
                        <Text style={styles.closeButtonText}>{label}</Text>
                        <TouchableOpacity onPress={toggleModal}>
                            <Text style={styles.closeButtonText}>✕</Text>
                        </TouchableOpacity>
                    </View>
                    {children}
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
    closeButtonText: {
        fontSize: SIZES.l,
        fontWeight: 'bold',
    },
});

export default MyModal;
