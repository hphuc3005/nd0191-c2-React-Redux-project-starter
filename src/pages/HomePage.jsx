import { QuestionsBlock } from "../components/question/QuestionsBlock";

export const HomePage = ({ pollsData }) => {
    const questionsData = pollsData?.questionsData;
    const answeredQuestionsId = pollsData?.userData?.answers;
    const answeredQuestions =
        answeredQuestionsId &&
        questionsData &&
        Object.values(questionsData).filter((question) => answeredQuestionsId[question.id]);
    const unansweredQuestions =
        answeredQuestionsId &&
        questionsData &&
        Object.values(questionsData).filter((question) => !answeredQuestionsId[question.id]);

    return (
        <div className="home">
            {unansweredQuestions && (
                <QuestionsBlock
                    questions={unansweredQuestions}
                    title={"New Questions"}
                />
            )}
            {answeredQuestions && (
                <QuestionsBlock
                    questions={answeredQuestions}
                    title={"Done"}
                />
            )}
        </div>
    );
};
