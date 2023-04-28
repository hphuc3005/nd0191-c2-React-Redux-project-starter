import { createSlice } from "@reduxjs/toolkit";
import {
    fetchAllUsers,
    updateLeaderboard,
    updateQuestion,
    updateQuestionAnswer,
    updateUserData,
} from "./pollsDataAsyncActions";
import { fetchQuestions } from "./pollsDataAsyncActions";

export const initPollsData = {
    userData: {},
    questionsData: [],
    leaderboardData: [],
    allUsers: {},
    isLoading: false,
    error: null,
};

const pollsDataSlice = createSlice({
    name: "polls-data",
    initialState: initPollsData,
    reducers: {
        clearData(state, action) {
            state.userData = { ...initPollsData.userData };
            state.questionsData = { ...initPollsData.questionsData };
            state.leaderboardData = { ...initPollsData.leaderboardData };
            state.allUsers = { ...initPollsData.allUsers };
            state.isLoading = false;
            state.error = null;
        },
    },
    extraReducers(builder) {
        builder
            .addCase(updateUserData.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(updateUserData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error?.message;
                state.userData = { error: action.error?.message }
            })
            .addCase(updateUserData.fulfilled, (state, action) => {
                const userData = action.payload.userData || {};
                state.userData = { ...userData };
                state.isLoading = false;
            })
            .addCase(fetchQuestions.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchQuestions.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error?.message;
            })
            .addCase(fetchQuestions.fulfilled, (state, action) => {
                const questionsData = action.payload.questionsData || {};
                state.questionsData = [...questionsData];
                state.isLoading = false;
            })
            .addCase(updateQuestionAnswer.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(updateQuestionAnswer.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error?.message;
            })
            .addCase(updateQuestionAnswer.fulfilled, (state, action) => {
                const userData = action.payload.userData || {};
                const questionsData = action.payload.questionsData || {};
                state.userData = { ...userData };
                state.questionsData = [...questionsData];
                state.isLoading = false;
            })
            .addCase(updateQuestion.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(updateQuestion.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error?.message;
            })
            .addCase(updateQuestion.fulfilled, (state, action) => {
                const questionsData = action.payload.questionsData || {};
                state.questionsData = [...questionsData];
                state.isLoading = false;
            })
            .addCase(updateLeaderboard.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(updateLeaderboard.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error?.message;
            })
            .addCase(updateLeaderboard.fulfilled, (state, action) => {
                state.leaderboardData = action.payload || [];
                state.isLoading = false;
            })
            .addCase(fetchAllUsers.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchAllUsers.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error?.message;
            })
            .addCase(fetchAllUsers.fulfilled, (state, action) => {
                state.allUsers = action.payload.allUsers || {};
                state.isLoading = false;
            });
    },
});

export const pollsDataActions = pollsDataSlice.actions;

export default pollsDataSlice;
