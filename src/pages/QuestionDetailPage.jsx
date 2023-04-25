import { useEffect } from "react";
import { QuestionDetail } from "../components/question/QuestionDetail";
import {
    fetchAllUsers,
    fetchQuestions,
    updateQuestionAnswer,
} from "../store/pollsDataAsyncActions";
import { NotFound } from "./NotFound";

export const QuestionDetailPage = ({ router, pollsData, dispatch }) => {
    const questionId = router?.params?.questionId;
    const questionData = pollsData?.questionsData.find((question) => question.id === questionId);
    const authedUserId = pollsData?.userData.id;
    const isLoading = pollsData.isLoading;
    const author =
        questionData?.author && pollsData?.allUsers && pollsData?.allUsers[questionData?.author];

    const handleAnswer = (answer) => {
        dispatch(
            updateQuestionAnswer({
                authedUserId,
                questionId,
                answer,
            })
        );
    };

    useEffect(() => {
        if (!questionData) {
            dispatch(fetchQuestions());
        }
    }, [dispatch, questionData]);

    useEffect(() => {
        if (!author?.id) {
            dispatch(fetchAllUsers());
        }
    }, [author, dispatch]);

    console.log(!isLoading, authedUserId, author?.id, !questionData);

    return (
        <div>
            {questionData && author?.id && (
                <QuestionDetail
                    questionData={questionData}
                    authorData={author}
                    questionText="Would You Rather?"
                    handleAnswer={handleAnswer}
                    authedUserId={authedUserId}
                />
            )}
            {!isLoading &&
                authedUserId &&
                pollsData?.allUsers &&
                Object.keys(pollsData?.allUsers).length > 0 &&
                !questionData?.id && <NotFound />}
        </div>
    );
};
