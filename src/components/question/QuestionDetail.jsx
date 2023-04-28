import { useState } from "react";
import { Option } from "../common/Option";
import { QuestionStatistic } from "./QuestionStatistic";

export const QuestionDetail = ({
    questionData,
    questionText,
    authorData,
    handleAnswer,
    authedUserId,
}) => {
    const optionOne = questionData.optionOne;
    const optionTwo = questionData.optionTwo;
    const optionOneSelected = optionOne?.votes?.includes(authedUserId);
    const optionTwoSelected = optionTwo?.votes?.includes(authedUserId);
    const totalVotes = optionOne?.votes?.length + optionTwo?.votes?.length;
    const disabled = optionOneSelected || optionTwoSelected;
    const [choosen, setChoosen] = useState("");

    const [isSelecting, setIsSelecting] = useState(false);

    const onSelect = (option) => {
        setIsSelecting(() => true);
        setChoosen(() => option);
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
                    id={"option-one"}
                    value={optionOne.text}
                    option={"optionOne"}
                    handleClick={onSelect}
                    selected={optionOneSelected || choosen === "optionOne"}
                    disabled={isSelecting || disabled}
                />
                <Option
                    key={"option-two"}
                    id={"option-two"}
                    value={optionTwo.text}
                    option={"optionTwo"}
                    handleClick={onSelect}
                    selected={optionTwoSelected || choosen === "optionTwo"}
                    disabled={isSelecting || disabled}
                />
            </div>
            <QuestionStatistic
                optionOne={optionOne}
                optionTwo={optionTwo}
                optionOneSelected={optionOneSelected}
                optionTwoSelected={optionTwoSelected}
                totalVotes={totalVotes}
            />
        </div>
    );
};
