import { createAsyncThunk } from "@reduxjs/toolkit";
import { checkAuthorization, isLoginSucceeded } from "../helpers/authorization";
import { getQuestions, getUserData, saveQuestion, saveQuestionAnswer } from "../helpers/apis";

export const updateUserData = createAsyncThunk(
    "polls-data/updateUserData",
    async (userData) => {
        try {
            let response;
            if (userData?.username && userData?.password) {
                response = await isLoginSucceeded(userData);
            } else {
                response = await checkAuthorization(userData)
            }
            return { userData: response }
        } catch (e) {
            return { userData: { error: e.message } }
        }
    });

export const fetchQuestions = createAsyncThunk(
    "polls-data/fetchQuestions",
    async () => {
        return getQuestions().then(
            res => ({ questionsData: res })
        ).catch(
            err => ({ questionsData: { error: err.message } })
        )
    });

export const updateQuestionAnswer = createAsyncThunk(
    "polls-data/updateQuestionAnswer",
    async ({ authedUserId, questionId, answer }) => {
        return saveQuestionAnswer({ authedUserId, questionId, answer }).then(
            async () => ({
                userData: await getUserData(authedUserId).then(res => res),
                questionsData: await getQuestions().then(res => res)
            })
        ).catch(
            err => ({ questionsData: { error: err.message } })
        )
    });

export const updateQuestion = createAsyncThunk(
    "polls-data/updateQuestion",
    async ({ optionOneText, optionTwoText, author }) => {
        return saveQuestion({ optionOneText, optionTwoText, author }).then(
            async () => ({
                questionsData: await getQuestions().then(res => res)
            })
        ).catch(
            err => ({ questionsData: { error: err.message } })
        )
    });