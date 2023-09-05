import React from 'react';
import MyModal from "@/app/components/modals/MyModal";
import {StyleSheet, View} from "react-native";
import FilterItem from "@/app/components/filter/FilterItem";

const FilterModal = ({isModalVisible, toggleModal}) => {

    return (
        <MyModal
            isModalVisible={isModalVisible}
            toggleModal={toggleModal}
            label={"Фільтри"}
        >
            <View style={styles.container}>
                <FilterItem title={"Сортування"} subtitle={"За замовчуванням"}/>
                <FilterItem title={"Кількість завдань"} slider/>
                <FilterItem title={"Тип завдання"} subtitle={"Всі"}/>
            </View>
        </MyModal>
    );
};
const styles = StyleSheet.create({
    container: {
        marginVertical: 20
    },
})
export default FilterModal;
