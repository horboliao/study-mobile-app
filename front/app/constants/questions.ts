export enum  questionType {
    singleChoice = "SINGLE_CHOICE",
    multiChoice = "MULTI_CHOICE",
    correspondence = "CORRESPONDENCE",
    numericInput = "NUMERIC_INPUT"
}
export const questions = [
    {
        id: "1",
        questionType: "SINGLE_CHOICE",
        questionText: "Яка столиця Франції?",
        options: [
            { id: "А", optionText: "Лондон", isCorrect: false },
            { id: "Б", optionText: "Париж", isCorrect: true },
            { id: "В", optionText: "Мадрид", isCorrect: false }
        ]
    },
    {
        id: "2",
        questionType: "MULTI_CHOICE",
        questionText: "Які з цих кольорів є основними?",
        options: [
            { id: "А", optionText: "Червоний", isCorrect: true},
            { id: "Б", optionText: "Білий", isCorrect: false},
            { id: "В", optionText: "Зелений", isCorrect: true},
            { id: "Г", optionText: "Рожевий", isCorrect: false},
        ]
    },
    {
        id: "3",
        questionType: "CORRESPONDENCE",
        questionText: "Пов'язуйте приклади з відповідями.",
        examples: [
            {
                id: "1",
                optionText: "Відкриття дверей",
                correctAnswer: "В"
            },
            {
                id: "2",
                optionText: "Світлофор",
                correctAnswer: "Г"
            },
            {
                id: "3",
                optionText: "Дзвінок на двері",
                correctAnswer:"А"
            }
        ],
        options: [
            {
                id: "А",
                optionText: "Звук дзвоника"
            },
            {
                id: "Б",
                optionText: "Зупинка руху автомобілів"
            },
            {
                id: "В",
                optionText: "Відкриття дверей ліфта"
            },
            {
                id: "Г",
                optionText: "Зелене світло для пішоходів"
            },
            {
                id: "Д",
                optionText: "Звук сигналу для водіїв"
            }
        ]

    },
    {
        id: "11",
        questionType: "NUMERIC_INPUT",
        questionText: "Скільки планет в сонячній системі?",
        correctAnswer: "8"
    }




]
