/* eslint-disable testing-library/render-result-naming-convention */
/* eslint-disable testing-library/prefer-screen-queries */
import * as React from "react";
import { render, fireEvent } from "@testing-library/react";
import { NewPoll } from "../components/forms/NewPoll";

import { MemoryRouter } from "react-router-dom";

describe("NewPollForm", () => {
    it('will navigate to "/" when success', () => {
        const navigate = jest.fn();
        const dispatch = jest.fn();
        const component = render(
            <MemoryRouter>
                <NewPoll
                    isLoading={false}
                    navigate={navigate}
                    dispatch={dispatch}
                />
            </MemoryRouter>
        );

        const firstOption = component.getByTestId("optionOneText");
        fireEvent.change(firstOption, { target: { value: "First Option" } });
        const secondOption = component.getByTestId("optionOneText");
        fireEvent.change(secondOption, { target: { value: "Second Option" } });
        var submitButton = component.getByTestId("submit-button");
        fireEvent.click(submitButton);
        expect(navigate).toHaveBeenCalledWith("/");
    });
});
