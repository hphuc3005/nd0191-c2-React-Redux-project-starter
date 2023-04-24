import { useEffect, useState } from "react";
import { getUserData } from "../helpers/apis";
import { QuestionDetail } from "../components/question/QuestionDetail";
import { updateQuestionAnswer } from "../store/pollsDataAsyncActions";

export const QuestionDetailPage = ({ router, pollsData, dispatch }) => {
    const questionId = router?.params?.questionId;
    const questionData = pollsData?.questionsData[questionId];
    const [author, setAuthor] = useState(null);
    const authedUserId = pollsData.userData.id;

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
        if (!author && questionData?.author) {
            getUserData(questionData?.author).then((userData) => setAuthor(() => userData));
        }
    }, [author, questionData?.author]);

    return (
        <div>
            {questionData && author && (
                <QuestionDetail
                    questionData={questionData}
                    authorData={author}
                    questionText="Would You Rather?"
                    handleAnswer={handleAnswer}
                    authedUserId={authedUserId}
                />
            )}
        </div>
    );
};
