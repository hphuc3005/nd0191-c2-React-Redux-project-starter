import { _getUsers } from "../_DATA";

export const checkAuthorization = async ({ userid }) => {
    let user
    await _getUsers().then(
        res => {
            user = res
                && res[userid]
        }
    )
    if (!user || !user.id) {
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
    return user
}