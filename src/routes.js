import { Navigate, Route, useLocation, useNavigate, useParams } from "react-router-dom";
import { connect, useDispatch, useSelector } from "react-redux";
import { HomePage } from "./pages/HomePage";
import { QuestionDetailPage } from "./pages/QuestionDetailPage";
import { LeaderboardPage } from "./pages/LeaderboardPage";
import { NewPollPage } from "./pages/NewPollPage";

const withRouter = (Component) => {
    const ComponentWithRouterProp = (props) => {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        const dispatch = useDispatch();
        const userId = useSelector((state) => state.pollsData?.userData?.id);
        return userId ? (
            <Component
                {...props}
                router={{ location, navigate, params }}
                dispatch={dispatch}
            />
        ) : (
            <Navigate to="/login" replace state={{ path: location.pathname }} />
        );
    };

    return ComponentWithRouterProp;
};

const mapStateToProps = (store, props) => {
    return {
        ...store,
        ...props,
    };
};

const mappedComponent = (Component) => {
    return withRouter(connect(mapStateToProps)(Component));
};

const routes = [
    {
        path: "/add",
        main: (props) => {
            const MappedComponent = mappedComponent(NewPollPage);
            return <MappedComponent {...props} />;
        },
    },
    {
        path: "/leaderboard",
        main: (props) => {
            const MappedComponent = mappedComponent(LeaderboardPage);
            return <MappedComponent {...props} />;
        },
    },
    {
        path: "questions/:questionId",
        main: (props) => {
            const MappedComponent = mappedComponent(QuestionDetailPage);
            return <MappedComponent {...props} />;
        },
    },
    {
        path: "",
        main: (props) => {
            const MappedComponent = mappedComponent(HomePage);
            return <MappedComponent {...props} />;
        },
    },
];

export const renderRoutes = (props) => {
    return (
        routes &&
        routes.map((route, index) => {
            return (
                <Route
                    key={index}
                    path={route.path}
                    element={route.main(props)}
                    {...props}
                />
            );
        })
    );
};

export default routes;
