import React from 'react';
import {StyleSheet, View, Text, Image} from "react-native";

interface TextbookItemProps {
    title: string;
    content: object
}
const TextbookItem:React.FC <TextbookItemProps> = ({content, title}) => {
    return (
        <View style={styles.lesson}>
            <Text style={styles.lessonTitle}>{title}</Text>
            {content.map((item, index) => (
                <View key={index} style={styles.subtopic}>
                    {item.type === 'text' && <Text>{item.data}</Text>}
                    {item.type === 'list' && (
                        <View>
                            {item.data.map((listItem, listItemIndex) => (
                                <Text key={listItemIndex}>• {listItem}</Text>
                            ))}
                        </View>
                    )}
                    {item.type === 'ordered-list' && (
                        <View>
                            {item.data.map((listItem, listItemIndex) => (
                                <Text key={listItemIndex}>{listItemIndex + 1}. {listItem}</Text>
                            ))}
                        </View>
                    )}
                    {item.type === 'table' && (
                        <View style={styles.table}>
                            {item.data.map((row, rowIndex) => (
                                <View key={rowIndex} style={styles.row}>
                                    {row.map((cell, cellIndex) => (
                                        <View key={cellIndex} style={styles.cell}>
                                            <Text>{cell}</Text>
                                        </View>
                                    ))}
                                </View>
                            ))}
                        </View>
                    )}
                    {item.type === 'image' && <Image source={item.data} style={styles.image} />}
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    lesson: {
        marginVertical: 10,
    },
    lessonTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    subtopic: {
        marginVertical: 5,
    },
    image: {
        width: 200,
        height: 150,
        resizeMode: 'contain',
    },
    table: {
        borderWidth: 1,
        borderColor: 'black',
        marginVertical: 10,
    },
    row: {
        flexDirection: 'row',
    },
    cell: {
        borderWidth: 1,
        borderColor: 'black',
        flex: 1,
        padding: 10,
    },
});
export default TextbookItem;
