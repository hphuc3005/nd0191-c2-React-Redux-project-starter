import { _getUsers } from "../_DATA";

export const checkAuthorization = async ({ userid }) => {
    const username = localStorage.username;
    if (!username && !userid) {
        return null
    }
    let user
    await _getUsers().then(
        res => {
            user = res
                && res[username || userid]
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
    await _getUsers().then(
        res => {
            user = res
                && res[username]
        }
    )
    if (!user || !user.id || username !== user.id || password !== user.password) {
        throw new Error(errorMessage);
    }
    localStorage.username = username
    return user
}