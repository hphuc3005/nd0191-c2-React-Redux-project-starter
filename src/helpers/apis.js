
import {
    _getQuestions,
    _getUsers,
    _saveQuestion,
    _saveQuestionAnswer
} from '../_DATA'


export const getQuestions = async () => {
    return _getQuestions().then(res => res).catch(err => err.message)
}

export const getQuestion = async (questionId) => {
    return _getQuestions().then(res => res && res[questionId]).catch(err => err.message)
}

export const getUserData = async (userId) => {
    return _getUsers().then(res => res && res[userId]).catch(err => err.message)
}

export const getAllUsersData = async () => {
    return _getUsers().then(res => res).catch(err => err.message)
}

export const saveQuestionAnswer = async ({ authedUserId, questionId, answer }) => {
    _saveQuestionAnswer({
        authedUser: authedUserId,
        qid: questionId,
        answer
    })
}

export const saveQuestion = async ({ optionOneText, optionTwoText, author }) => {
    _saveQuestion({ optionOneText, optionTwoText, author })
}