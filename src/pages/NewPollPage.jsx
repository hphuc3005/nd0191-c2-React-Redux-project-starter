import { NewPoll } from "../components/forms/NewPoll";

export const NewPollPage = ({ pollsData, dispatch }) => {
    const authedUserId = pollsData?.userData?.id;
    return (
        <NewPoll
            authedUserId={authedUserId}
            dispatch={dispatch}
        />
    );
};
