
import {
    _getQuestions,
    _getUser,
    _getUsers,
    _saveQuestion,
    _saveQuestionAnswer
} from '../_DATA'


export const getQuestions = async () => {
    return _getQuestions().then(res => res).catch(err => err.message)
}