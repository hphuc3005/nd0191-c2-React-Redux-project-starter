import { createSlice } from "@reduxjs/toolkit";
import { updateQuestion, updateQuestionAnswer, updateUserData } from "./pollsDataAsyncActions";
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
                const userData = action.payload.userData || {};
                state.userData = { ...userData };
            })
            .addCase(fetchQuestions.fulfilled, (state, action) => {
                const questionsData = action.payload.questionsData || {};
                state.questionsData = { ...questionsData }
            })
            .addCase(updateQuestionAnswer.fulfilled, (state, action) => {
                const userData = action.payload.userData || {};
                const questionsData = action.payload.questionsData || {};
                state.userData = { ...userData };
                state.questionsData = { ...questionsData };
            })
            .addCase(updateQuestion.fulfilled, (state, action) => {
                const questionsData = action.payload.questionsData || {};
                state.questionsData = { ...questionsData };
            })
    }
});

export const pollsDataActions = pollsDataSlice.actions;

export default pollsDataSlice;
