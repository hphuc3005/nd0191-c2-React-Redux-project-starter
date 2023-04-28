import { useEffect, useState } from "react";
import { QuestionDetail } from "../components/question/QuestionDetail";
import { updateQuestionAnswer } from "../store/pollsDataAsyncActions";
import { NotFoundPage } from "./NotFoundPage";
import { getQuestion, getUserData } from "../helpers/apis";
import { Modal } from "../components/common/Modal";

export const QuestionDetailPage = ({ router, pollsData, dispatch }) => {
    const questionId = router?.params?.questionId;
    const authedUserId = pollsData?.userData?.id;
    const [questionData, setQuestionData] = useState(null);
    const [author, setAuthor] = useState(null);
    const [completed, setCompleted] = useState(false);

    const handleAnswer = (answer) => {
        dispatch(
            updateQuestionAnswer({
                authedUserId,
                questionId,
                answer,
            })
        );
        getQuestion(questionId).then((res) => {
            if (res?.id) {
                setQuestionData(() => res);
            }
        });
    };

    useEffect(() => {
        if (!completed && (!questionData?.id || !author?.id)) {
            getQuestion(questionId)
                .then((res) => {
                    if (res?.id) {
                        setQuestionData(() => res);
                    }
                    return res;
                })
                .then(async (res) => {
                    let author;
                    if (res?.author) {
                        author = await getUserData(res.author);
                    }
                    return author;
                })
                .then((res) => {
                    if (res?.id) {
                        setAuthor(() => res);
                    }
                    setCompleted(() => true);
                });
        }
    }, [author?.id, completed, dispatch, questionData, questionId]);

    return (
        <div>
            {completed && questionData && author?.id && (
                <QuestionDetail
                    questionData={questionData}
                    authorData={author}
                    questionText="Would You Rather?"
                    handleAnswer={handleAnswer}
                    authedUserId={authedUserId}
                />
            )}
            {!completed && (!author?.id || !questionData?.id) && <Modal />}
            {completed && (!author?.id || !questionData?.id) && <NotFoundPage />}
        </div>
    );
};
