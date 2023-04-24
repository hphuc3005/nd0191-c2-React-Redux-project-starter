import { Question } from "./Question";

export const QuestionsBlock = ({ title, questions }) => {
    return (
        <div className="questions-block">
            <h3>{title}</h3>
            <div className="questions">
                {Array.isArray(questions) &&
                    questions.map((question, index) => {
                        return (
                            <Question
                                key={index}
                                questionId={question.id}
                                createdTime={question.timestamp}
                                createdUser={question.author}
                            />
                        );
                    })}
            </div>
        </div>
    );
};
