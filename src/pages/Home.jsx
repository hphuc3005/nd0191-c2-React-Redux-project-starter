import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuestions } from "../store/pollsDataAsyncActions";
import { QuestionsBlock } from "../components/common/QuestionsBlock";

export const Home = (props) => {
    const dispatch = useDispatch();
    const questionsData = props.pollsData?.questionsData;
    const answeredQuestions = questionsData?.answered;
    const unansweredQuestions = questionsData?.unanswered;
    useEffect(() => {
        if (!answeredQuestions && !unansweredQuestions) {
            dispatch(fetchQuestions());
        }
    }, [answeredQuestions, dispatch, unansweredQuestions]);

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
