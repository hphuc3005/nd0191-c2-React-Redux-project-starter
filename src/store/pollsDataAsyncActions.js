import { createAsyncThunk } from "@reduxjs/toolkit";
import { checkAuthorization, isLoginSucceeded } from "../helpers/authorization";
import { getQuestions } from "../helpers/apis";

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