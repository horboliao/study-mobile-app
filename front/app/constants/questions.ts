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
        value: 1,
        questionText: "Яка столиця Франції?",
        options: [
            { id: "А", optionText: "Лондон", isCorrect: false },
            { id: "Б", optionText: "Париж", isCorrect: true },
            { id: "В", optionText: "Мадрид", isCorrect: false }
        ],
        explanation: "Столиця Франції - Париж. Відповідь Б"
    },
    {
        id: "2",
        questionType: "MULTI_CHOICE",
        value: 1,
        questionText: "Які з цих кольорів є основними?",
        options: [
            { id: "А", optionText: "Червоний", isCorrect: true},
            { id: "Б", optionText: "Білий", isCorrect: false},
            { id: "В", optionText: "Зелений", isCorrect: true},
            { id: "Г", optionText: "Рожевий", isCorrect: false},
        ],
        explanation: "Основні кольори - червоний та зелений. А, В"
    },
    {
        id: "3",
        questionType: "CORRESPONDENCE",
        value: 4,
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
        ],
        explanation: "1-В, 2-Г, 3-А"
    },
    {
        id: "11",
        questionType: "NUMERIC_INPUT",
        value: 2,
        questionText: "Скільки планет в сонячній системі?",
        correctAnswer: "8",
        explanation: "Планет у сонячній системі 8. Плутон не є планетою"
    }




]
