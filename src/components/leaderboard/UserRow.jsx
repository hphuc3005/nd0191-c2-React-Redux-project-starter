import { UserInfo } from "./UserInfo";

export const UserRow = ({ userData }) => {
    return (
        <div className="user-row">
            <UserInfo userData={userData} />
            <div>{userData.answers}</div>
            <div>{userData.created}</div>
        </div>
    );
};
