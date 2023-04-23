import { _getUser } from "../_DATA";

export const checkAuthorization = async ({ userid }) => {
    const username = localStorage.username;
    if (!username && !userid) {
        return null
    }
    let user
    await _getUser(username).then(
        userData => {
            user = userData && JSON.parse(userData)
        }
    )
    if (!user || !user.id || username !== user.id) {
        return null
    }
    return user
}

export const isLoginSucceeded = async ({ username, password }) => {
    const errorMessage = "Username or Password is invalid, please try again!"
    if (!username || !password) {
        throw new Error(errorMessage);
    }
    let user
    await _getUser(username).then(
        userData => {
            user = userData && JSON.parse(userData)
        }
    )
    if (!user || !user.id || username !== user.id || password !== user.password) {
        throw new Error(errorMessage);
    }
    localStorage.username = username
    return user
}