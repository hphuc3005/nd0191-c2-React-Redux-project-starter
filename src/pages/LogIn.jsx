import { LogInForm } from "../components/forms/LogInForm";
import { Navigate } from "react-router-dom";

export const LogIn = (props) => {
    const isAuthenticated = localStorage.getItem("username");
    if (isAuthenticated) {
        return (
            <Navigate
                to="/"
                replace={true}
            />
        );
    }
    return <LogInForm formError={props.pollsData?.userData?.error} />;
};
