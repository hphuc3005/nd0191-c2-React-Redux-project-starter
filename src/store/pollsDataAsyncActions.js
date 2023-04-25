import { createAsyncThunk } from "@reduxjs/toolkit";
import { checkAuthorization, isLoginSucceeded } from "../helpers/authorization";
import { getAllUsersData, getQuestions, getUserData, saveQuestion, saveQuestionAnswer } from "../helpers/apis";

export const updateUserData = createAsyncThunk(
    "polls-data/updateUserData",
    async (userData) => {
        let response;
        if (userData?.username && userData?.password) {
            response = await isLoginSucceeded(userData);
        } else {
            response = await checkAuthorization({ userid: userData?.username })
        }
        return { userData: response }
    });

export const fetchAllUsers = createAsyncThunk(
    "polls-data/fetchAllUsers",
    async (authorId) => {
        return getAllUsersData().then(res => ({ allUsers: res }))
    });

export const fetchQuestions = createAsyncThunk(
    "polls-data/fetchQuestions",
    async () => {
        return getQuestions().then(
            res => {
                const sortedQuestions = res && Object.values(res).sort((a, b) => {
                    if (a.timestamp === b.timestamp) {
                        return a.author - b.author;
                    }
                    return b.timestamp - a.timestamp;
                })
                return ({ questionsData: sortedQuestions })
            }
        );
    })

export const updateQuestionAnswer = createAsyncThunk(
    "polls-data/updateQuestionAnswer",
    async ({ authedUserId, questionId, answer }) => {
        return saveQuestionAnswer({ authedUserId, questionId, answer }).then(
            async () => ({
                userData: await getUserData(authedUserId).then(res => res),
                questionsData: await getQuestions().then(
                    res => {
                        return res && Object.values(res).sort((a, b) => {
                            if (a.timestamp === b.timestamp) {
                                return a.author - b.author;
                            }
                            return b.timestamp - a.timestamp;
                        })
                    }
                )
            })
        )
    });

export const updateQuestion = createAsyncThunk(
    "polls-data/updateQuestion",
    async ({ optionOneText, optionTwoText, author }) => {
        return saveQuestion({ optionOneText, optionTwoText, author }).then(
            async () => ({
                questionsData: await getQuestions().then(
                    res => {
                        return res && Object.values(res).sort((a, b) => {
                            if (a.timestamp === b.timestamp) {
                                return a.author - b.author;
                            }
                            return b.timestamp - a.timestamp;
                        })
                    }
                )
            })
        )
    });

export const updateLeaderboard = createAsyncThunk(
    "polls-data/updateLeaderboard",
    async () => {
        return getAllUsersData().then((user) => {
            const usersData = Object.values(user).map((user) => {
                return {
                    name: user?.name,
                    id: user?.id,
                    avatarURL: user.avatarURL,
                    answers: (user?.answers && Object.keys(user.answers)?.length) || 0,
                    created: user?.questions?.length || 0,
                };
            });
            usersData.sort((a, b) => {
                if (a.answers === b.answers) {
                    return b.created - a.created;
                }
                return b.answers - a.answers;
            });
            return usersData
        });
    });