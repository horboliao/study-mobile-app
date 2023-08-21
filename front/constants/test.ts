export const test = [
    {
        id: "1",
        questionType: "SINGLE_CHOICE",
        questionText: "Яка столиця Франції?",
        options: [
            { id: "1", optionText: "Лондон", isCorrect: false },
            { id: "2", optionText: "Париж", isCorrect: false },
            { id: "3", optionText: "Мадрид", isCorrect: false }
        ]
    },
    {
        id: "2",
        questionType: "MULTI_CHOICE",
        questionText: "Які з цих кольорів є основними?",
        options: [
            { id: "4", optionText: "Червоний", isCorrect: true},
            { id: "5", optionText: "Білий", isCorrect: false},
            { id: "6", optionText: "Зелений", isCorrect: true},
            { id: "7", optionText: "Рожевий", isCorrect: false},
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
                correctAnswer: "3"
            },
            {
                id: "2",
                optionText: "Світлофор",
                correctAnswer: "4"
            },
            {
                id: "3",
                optionText: "Дзвінок на двері",
                correctAnswer:"1"
            }
        ],
        options: [
            {
                id: "1",
                optionText: "Звук дзвоника"
            },
            {
                id: "2",
                optionText: "Зупинка руху автомобілів"
            },
            {
                id: "3",
                optionText: "Відкриття дверей ліфта"
            },
            {
                id: "4",
                optionText: "Зелене світло для пішоходів"
            },
            {
                id: "5",
                optionText: "Звук сигналу для водіїв"
            }
        ]

    },
    {
        id: "11",
        questionType: "NUMERIC_INPUT",
        questionText: "Скільки планет в сонячній системі?",
        options: [
            { id: "17", correctAnswer: "8" }
        ]
    }




]
