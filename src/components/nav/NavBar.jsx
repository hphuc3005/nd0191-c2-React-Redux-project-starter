import { useNavigate } from "react-router-dom";
import { NavItem } from "./NavItem";
import { useDispatch, useSelector } from "react-redux";
import { pollsDataActions } from "../../store/pollsDataSlice";
import { Modal } from "../common/Modal";

const navItems = [
    {
        label: "Home",
        link: "/",
    },
    {
        label: "Leaderboard",
        link: "/leaderboard",
    },
    {
        label: "Create New Poll",
        link: "/add",
    },
];

export const NavBar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.pollsData?.userData);
    const isLoading = useSelector((state) => state.pollsData?.isLoading);

    const onLogOut = () => {
        localStorage.removeItem("username");
        dispatch(pollsDataActions.clearData());
        navigate("/login");
    };

    return (
        <nav className="navbar">
            {isLoading && <Modal />}
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
            {userData?.id && (
                <ul className="user-menu">
                    <div className="navbar-user-avatar">
                        <img
                            src={userData.avatarURL}
                            alt="User Avatar"
                        />
                    </div>
                    <li className="user-menu-item">
                        <p>{userData?.id}</p>
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
