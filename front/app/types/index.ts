type Example = {
    id: string;
    optionText: string;
    correctAnswer: string;
};

type Option = {
    id: string;
    optionText: string;
    isCorrect?: boolean;
};

type Question = {
    id: string;
    questionType: string;
    value: number;
    questionText: string;
    correctAnswer?: string;
    examples?: Example[];
    options: Option[];
    explanation: string;
};

