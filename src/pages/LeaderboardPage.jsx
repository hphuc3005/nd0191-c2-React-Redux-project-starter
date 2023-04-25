import { useEffect } from "react";
import { UserRow } from "../components/leaderboard/UserRow";
import { updateLeaderboard } from "../store/pollsDataAsyncActions";

export const LeaderboardPage = ({ dispatch, pollsData }) => {
    const leaderboardData = pollsData?.leaderboardData;
    useEffect(() => {
        dispatch(updateLeaderboard());
    }, [dispatch]);
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
            {Array.isArray(leaderboardData) &&
                leaderboardData.map((user, index) => {
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
