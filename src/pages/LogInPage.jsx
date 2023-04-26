import { useDispatch, useSelector } from "react-redux";
import { LogInForm } from "../components/forms/LogInForm";
import { Navigate, useLocation } from "react-router-dom";

export const LogInPage = () => {
    const dispatch = useDispatch();
    const authedUser = useSelector((state) => state.pollsData?.userData);
    const { state } = useLocation();
    if (authedUser?.id) {
        return (
            <Navigate
                to={state?.path || "/"}
                replace={true}
            />
        );
    }
    return (
        <LogInForm
            formError={authedUser?.error}
            dispatch={dispatch}
        />
    );
};
