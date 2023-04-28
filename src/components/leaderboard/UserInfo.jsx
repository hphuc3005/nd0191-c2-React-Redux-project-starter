export const UserInfo = ({ userData }) => {
    return (
        <div className="user-info">
            <img
                src={userData.avatarURL}
                alt="User Avatar"
            />
            <div>
                <div>
                    <strong>{userData.name}</strong>
                </div>
                <div>{userData?.id}</div>
            </div>
        </div>
    );
};
