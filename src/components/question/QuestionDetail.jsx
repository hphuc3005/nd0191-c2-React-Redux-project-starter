import { useState } from "react";
import { Option } from "../common/Option";

export const QuestionDetail = ({
    questionData,
    questionText,
    authorData,
    handleAnswer,
    authedUserId,
}) => {
    const optionOneSelected = questionData.optionOne.votes.includes(authedUserId);
    const optionTwoSelected = questionData.optionTwo.votes.includes(authedUserId);
    const disabled = optionOneSelected || optionTwoSelected;

    const [isSelecting, setIsSelecting] = useState(false);

    const onSelect = (option) => {
        setIsSelecting(() => true);
        handleAnswer(option);
    };

    return (
        <div className="question-detail">
            <h4>Poll by {questionData.author}</h4>
            <img
                src={authorData.avatarURL}
                alt="Author Avatar"
            />
            <h4>{questionText}</h4>
            <div className="options">
                <Option
                    key={"option-one"}
                    value={questionData.optionOne.text}
                    option={"optionOne"}
                    handleClick={onSelect}
                    selected={optionOneSelected}
                    disabled={isSelecting || disabled}
                />
                <Option
                    key={"option-two"}
                    value={questionData.optionTwo.text}
                    option={"optionTwo"}
                    handleClick={onSelect}
                    selected={optionTwoSelected}
                    disabled={isSelecting || disabled}
                />
            </div>
        </div>
    );
};
