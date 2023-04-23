import { Button } from "./Button";

export const Question = ({ questionId, createdUser, createdTime, handleQuestion }) => {
    const onClick = () => {
        console.log(questionId);
        // handleQuestion(questionId);
    };
    const convertedTime = new Date(createdTime);
    return (
        <div className="question">
            <h4>{createdUser}</h4>
            <small>{convertedTime.toLocaleString()}</small>
            <Button
                onClick={onClick}
                text={"Show"}
            />
        </div>
    );
};
