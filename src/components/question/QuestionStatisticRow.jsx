export const QuestionStatisticRow = ({ selected, optionText, votesNumber, totalVotes }) => {
    return (
        <div className="question-detail-row">
            <div className="choice">{selected ? "Yes" : "No"}</div>
            <div className="chose-option justify-left">{optionText}</div>
            <div className="number">{votesNumber}</div>
            <div className="number">{`${
                totalVotes ? ((100 * votesNumber) / totalVotes).toFixed(2) : "0.00"
            } %`}</div>
        </div>
    );
};
