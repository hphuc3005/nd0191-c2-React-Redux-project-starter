import { createSlice } from "@reduxjs/toolkit";
import { updateUserData } from "./pollsDataAsyncActions";
import { fetchQuestions } from "./pollsDataAsyncActions";

const initPollsData = {
    userData: {},
    questionsData: {},
};

const pollsDataSlice = createSlice({
    name: "polls-data",
    initialState: initPollsData,
    reducers: {
        clearData(state, action) {
            state.userData = { ...initPollsData.userData };
            state.questionsData = { ...initPollsData.questionsData };
        },
    },
    extraReducers(builder) {
        builder
            .addCase(updateUserData.fulfilled, (state, action) => {
                const userData = action.payload.userData;
                state.userData = { ...userData };
            })
            .addCase(fetchQuestions.fulfilled, (state, action) => {
                const questionsData = action.payload.questionsData || {};
                const currentUser = state.userData.id;

                const formattedData = Object.keys(questionsData).reduce((prevData, key) => {
                    const answerData = questionsData[key];
                    const optionOneVotes = answerData?.optionOne?.votes
                    const optionTwoVotes = answerData?.optionTwo?.votes
                    if (!answerData || !optionOneVotes || !optionTwoVotes) {
                        return prevData;
                    } else if (
                        (optionOneVotes.includes(currentUser)) ||
                        (optionTwoVotes.includes(currentUser))
                    ) {
                        prevData.answered.push(answerData)
                    } else {
                        prevData.unanswered.push(answerData)
                    }
                    return prevData
                }, {
                    answered: [],
                    unanswered: [],
                });
                state.questionsData = { ...formattedData }
            })
    }
});

export const pollsDataActions = pollsDataSlice.actions;

export default pollsDataSlice;
