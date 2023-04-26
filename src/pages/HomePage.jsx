import { useEffect } from "react";
import { QuestionsBlock } from "../components/question/QuestionsBlock";
import { fetchQuestions } from "../store/pollsDataAsyncActions";
import { Tabs } from "../components/common/Tabs";

export const HomePage = ({ pollsData, dispatch }) => {
    const questionsData = pollsData?.questionsData;
    const answeredQuestionsId = pollsData?.userData?.answers;
    const answeredQuestions =
        answeredQuestionsId &&
        Array.isArray(questionsData) &&
        questionsData.filter((question) => answeredQuestionsId[question.id]);
    const unansweredQuestions =
        answeredQuestionsId &&
        Array.isArray(questionsData) &&
        questionsData.filter((question) => !answeredQuestionsId[question.id]);

    useEffect(() => {
        if (
            pollsData?.userData?.id &&
            (!questionsData || Object.keys(questionsData).length === 0)
        ) {
            dispatch(fetchQuestions());
        }
    }, [dispatch, pollsData?.userData?.id, questionsData]);

    return (
        <div className="home">
            <div className="warpper">
                <Tabs
                    tabList={[
                        { id: "one", label: "New Questions" },
                        { id: "two", label: "Answered Questions" },
                    ]}
                    indexDefaultChecked={0}
                />
                <div className="panels">
                    <div
                        className="panel"
                        id="one-panel"
                    >
                        <QuestionsBlock
                            questions={unansweredQuestions}
                            title={"New Questions"}
                        />
                    </div>
                    <div
                        className="panel"
                        id="two-panel"
                    >
                        <QuestionsBlock
                            questions={answeredQuestions}
                            title={"Answered Questions"}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
