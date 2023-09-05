import React, {useCallback, useState} from 'react';
import {StyleSheet, Text, View} from "react-native";
import TextField from "@/app/components/TextField";
import Layout from "@/app/components/Layout";
import {SIZES, subjects} from "@/app/constants";
import Subject from "@/app/components/Subject";
import FilterModal from "@/app/components/modals/FilterModal";
import AnswerModal from "@/app/components/modals/AnswerModal";

const Search = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [searchTag, setSearchTag] = useState("");
    const [selectedSubjects, setSelectedSubjects] = useState([]);

    const toggleModal = useCallback(() => {
        setIsModalVisible((prevVisible) => !prevVisible);
    }, []);

    const onSearch = () => {

    }

    return (
        <Layout
            title={"Пошук"}
            subtitle={"В нашій колекції ви знайдете завдання із ЗНО, навчальний матеріал та відеоуроки"}>
            <TextField
                value={searchTag}
                placeholder={"Дійсні числа"}
                onChangeText={setSearchTag}
                search
                onFilter={toggleModal}
                onSearch={onSearch}
            />
            <Text style={styles.label}>Предмети</Text>
            <View style={styles.subjectsContainer}>
                {
                    subjects.map((subject) => {
                        return <Subject
                            label={subject.label}
                            key={subject.label}
                            onPress={() => setSelectedSubjects((prevSubjects) => [...prevSubjects, subject.label])}/>
                    })
                }
            </View>
            <FilterModal
                isModalVisible={isModalVisible}
                toggleModal={toggleModal}
            />
        </Layout>
    );
};
const styles = StyleSheet.create({
    label: {
        fontSize: SIZES.l,
        fontWeight: 'bold',
        marginTop: 15
    },
    subjectsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: 15,
    },
})
export default Search;
