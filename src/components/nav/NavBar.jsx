import { useNavigate } from "react-router-dom";
import { NavItem } from "./NavItem";
import { useEffect } from "react";
import { checkAuthorization } from "../../helpers/authorization";
import { useDispatch, useSelector } from "react-redux";
import { pollsDataActions } from "../../store/pollsDataSlice";
import { updateUserData } from "../../store/pollsDataAsyncActions";

const navItems = [
    {
        label: "Home",
        link: "/",
    },
    {
        label: "Dashboard",
        link: "/dashboard",
    },
    {
        label: "New",
        link: "/add",
    },
];

export const NavBar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.pollsData.userData);

    useEffect(() => {
        const currentUsername = localStorage.getItem("username");
        if (!currentUsername && !userData?.id) {
            navigate("/login");
        } else if (currentUsername && !userData?.id) {
            dispatch(updateUserData({ userid: currentUsername }));
        }
    }, [dispatch, navigate, userData, userData.id]);

    const onLogOut = () => {
        localStorage.removeItem("username");
        dispatch(pollsDataActions.clearData());
        navigate("/login");
    };

    return (
        <nav className="navbar">
            <ul className="navbar-nav">
                {navItems.map((item, index) => {
                    return (
                        <NavItem
                            key={index}
                            navItemLabel={item.label}
                            navItemLink={item.link}
                        />
                    );
                })}
            </ul>
            {userData.id && (
                <ul className="user-menu">
                    <div className="navbar-user-avatar">
                        <img
                            src={userData.avatarURL}
                            alt="User Avatar"
                        />
                    </div>
                    <li className="user-menu-item">
                        <p>{userData.name}</p>
                    </li>
                    <li className="user-menu-item">
                        <button onClick={onLogOut}>Logout</button>
                    </li>
                </ul>
            )}
        </nav>
    );
};

export default NavBar;
