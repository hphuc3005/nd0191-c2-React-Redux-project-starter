import { QuestionStatisticRow } from "./QuestionStatisticRow";

export const QuestionStatistic = ({
    optionOne,
    optionOneSelected,
    optionTwo,
    optionTwoSelected,
    totalVotes,
}) => {
    return (
        <div className="question-statistic">
            <div className="question-detail-row title">
                <div className="choice">
                    <strong>Your choice</strong>
                </div>
                <div className="chose-option">
                    <strong>Option</strong>
                </div>
                <div className="number">
                    <strong>Voted</strong>
                </div>
                <div className="number">
                    <strong>Percent</strong>
                </div>
            </div>
            <QuestionStatisticRow
                selected={optionOneSelected}
                optionText={optionOne.text}
                votesNumber={optionOne?.votes?.length}
                totalVotes={totalVotes}
            />
            <QuestionStatisticRow
                selected={optionTwoSelected}
                optionText={optionTwo.text}
                votesNumber={optionTwo?.votes?.length}
                totalVotes={totalVotes}
            />
        </div>
    );
};
