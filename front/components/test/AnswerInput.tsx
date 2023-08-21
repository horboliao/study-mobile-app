import {StyleSheet, TextInput, View} from "react-native";
import {COLORS, SIZES} from "@/constants";

const AnswerInput = ({ answer, onChange, type }) => {
    return (
            <TextInput
                value={answer}
                onChangeText={onChange}
                placeholder="Введіть відповідь"
                style={styles.answerInput}
                placeholderTextColor={COLORS.gray}
            />
    );
};
const styles = StyleSheet.create({
    answerInput: {
        borderWidth: 1,
        borderColor: COLORS.gray,
        padding: 10,
        marginBottom: 20,
        borderRadius:15,
        backgroundColor: COLORS.white,
        fontSize: SIZES.s
    },
});
export default AnswerInput;
