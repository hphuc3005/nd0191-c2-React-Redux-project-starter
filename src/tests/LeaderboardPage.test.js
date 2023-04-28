/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/render-result-naming-convention */
import { LeaderboardPage } from "../pages/LeaderboardPage";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import '@testing-library/jest-dom'


describe("LeaderboardPage", () => {
    const mockPollsData = {
        leaderboardData: [
            {
                name: 'Sarah Edo',
                id: 'sarahedo',
                avatarURL: '/images/1.jpg',
                answers: 4,
                created: 2
            },
            {
                name: 'Mike Tsamis',
                id: 'mtsamis',
                avatarURL: '/images/3.jpg',
                answers: 3,
                created: 2
            },
            {
                name: 'Tyler McGinnis',
                id: 'tylermcginnis',
                avatarURL: '/images/2.jpg',
                answers: 2,
                created: 2
            },
            {
                name: 'Zenobia Oshikanlu',
                id: 'zoshikanlu',
                avatarURL: '/images/4.jpg',
                answers: 1,
                created: 0
            }
        ],
        userData: { id: "sarahedo" }
    }
    const dispatch = jest.fn()

    it('will render Leaderboard page', () => {
        const component = render(
            <MemoryRouter>
                <LeaderboardPage
                    dispatch={dispatch}
                    pollsData={mockPollsData}
                />
            </MemoryRouter>
        );
        const userCol = component.getByText(/Users/i);
        const votedCol = component.getByText(/Voted/i);
        const createdCol = component.getByText(/Created/i);
        const name = component.getByText(/Sarah Edo/i);
        expect(userCol).toBeInTheDocument();
        expect(votedCol).toBeInTheDocument();
        expect(createdCol).toBeInTheDocument();
        expect(name).toBeInTheDocument();
    });

    it('will not render Leaderboard rows', () => {
        const component = render(
            <MemoryRouter>
                <LeaderboardPage
                    dispatch={dispatch}
                />
            </MemoryRouter>
        );
        const name = component.queryByText(/Sarah Edo/i);
        expect(name).toBeNull();
    });
});