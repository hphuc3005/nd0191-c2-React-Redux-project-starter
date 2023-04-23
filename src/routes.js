import { Route, useLocation, useNavigate, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { LogIn } from "./pages/LogIn";
import { Home } from "./pages/Home";

const withRouter = (Component) => {
    const ComponentWithRouterProp = (props) => {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return <Component {...props} router={{ location, navigate, params }} />;
    };

    return ComponentWithRouterProp;
};

const mapStateToProps = (store, props) => {
    return {
        ...store,
        ...props
    };
};

const mappedComponent = (Component) => {
    return withRouter(connect(mapStateToProps)(Component))
}

const routes = [
    {
        path: "/login",
        exact: false,
        main: (props) => {
            const MappedComponent = mappedComponent(LogIn)
            return <MappedComponent {...props} />
        },
    },
    {
        path: "",
        exact: true,
        main: (props) => {
            const MappedComponent = mappedComponent(Home)
            return <MappedComponent {...props} />
        }
    },
];

export const renderRoutes = (props) => {
    return routes && routes.map((route, index) => {
        return (
            <Route
                key={index}
                path={route.path}
                exact={route.exact}
                element={route.main(props)}
                {...props}
            />
        );
    });
}

export default routes;