import { LogInForm } from "../components/forms/LogInForm";
import { Navigate } from "react-router-dom";

export const LogInPage = ({ dispatch, pollsData }) => {
    const isAuthenticated = localStorage.getItem("username");
    if (isAuthenticated) {
        return (
            <Navigate
                to="/"
                replace={true}
            />
        );
    }
    return (
        <LogInForm
            formError={pollsData?.userData?.error}
            dispatch={dispatch}
        />
    );
};
