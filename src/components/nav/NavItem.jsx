import { NavLink } from "react-router-dom";

export const NavItem = ({ navItemLabel, navItemLink }) => {
    return (
        <li className="nav-item">
            <NavLink
                to={navItemLink}
                className="nav-link"
            >
                {navItemLabel}
            </NavLink>
        </li>
    );
};
