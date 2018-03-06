import { NavigationActions } from "react-navigation";

export const navigation = (gotoScreen) => ({
    type: 'ACTION_NAVIGATE',
    gotoScreen: gotoScreen
});

export const loginUserNameInput = (name) => ({
    type: 'LOGIN_USER_NAME_INPUT',
    name
});

export const loginPasswordInput = (password) => ({
    type: 'LOGIN_PASSWORD_INPUT',
    password,
});

export const userRegister = () => ({
    type: 'USER_REGISTER',
});

function loginToServer() {
    return new Promise((resolve, reject) => {
        //resolve();
        //reject();
        setTimeout(() => {
            console.log('timeout');
            resolve();
        }, 1000);
    });
}

export const userLogin = (username, password, dispatch) => ({
    type: 'USER_LOGIN_START',
    username,
    password,
    dispatch,
});

export const userLoginOk = (dispatch) => ({
    type: 'USER_LOGIN_OK',
    dispatch,
});

export const userLoginFail = () => ({
    type: 'USER_LOGIN_FAIL'
});

