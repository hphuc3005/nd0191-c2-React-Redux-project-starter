import { NewPoll } from "../components/forms/NewPoll";

export const NewPollPage = ({ pollsData, dispatch, router }) => {
    const authedUserId = pollsData?.userData?.id;
    return (
        <NewPoll
            authedUserId={authedUserId}
            dispatch={dispatch}
            isLoading={pollsData.isLoading}
            navigate={router.navigate}
        />
    );
};
