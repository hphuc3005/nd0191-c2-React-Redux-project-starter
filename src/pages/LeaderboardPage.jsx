import { useEffect, useState } from "react";
import { getAllUsersData } from "../helpers/apis";
import { UserRow } from "../components/leaderboard/UserRow";

export const LeaderboardPage = () => {
    const [allUser, setAllUser] = useState(null);
    useEffect(() => {
        if (!allUser) {
            getAllUsersData().then((data) => setAllUser(() => data && Object.values(data)));
            getAllUsersData().then((user) => {
                const usersData = Object.values(user).map((user) => {
                    return {
                        name: user?.name,
                        id: user?.id,
                        avatarURL: user.avatarURL,
                        answers: (user?.answers && Object.keys(user.answers)?.length) || 0,
                        created: user?.questions?.length || 0,
                    };
                });
                usersData.sort((a, b) => {
                    if (a.answers === b.answers) {
                        return a.created - b.created;
                    }
                    return b.answers - a.answers;
                });
                setAllUser(() => usersData);
            });
        }
    }, [allUser]);
    return (
        <>
            <div className="user-row title">
                <div
                    className="user-info"
                    style={{ marginLeft: 20 }}
                >
                    <strong>Users</strong>
                </div>
                <div>
                    <strong>Answers</strong>
                </div>
                <div>
                    <strong>Created</strong>
                </div>
            </div>
            {allUser &&
                allUser.map((user, index) => {
                    return (
                        <UserRow
                            userData={user}
                            key={index}
                        />
                    );
                })}
        </>
    );
};
