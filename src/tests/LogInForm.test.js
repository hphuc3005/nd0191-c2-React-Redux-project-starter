/* eslint-disable testing-library/render-result-naming-convention */
/* eslint-disable testing-library/prefer-screen-queries */
import * as React from "react";
import { render, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { LogInForm } from "../components/forms/LogInForm";

describe("NewPollForm", () => {
    const dispatch = jest.fn();

    it("will true when success", () => {
        const component = render(
            <MemoryRouter>
                <LogInForm
                    formError={null}
                    dispatch={dispatch}
                />
            </MemoryRouter>
        );

        const payload = {
            username: "tylermcginnis",
            password: "abc321",
        };

        const username = component.getByTestId("username");
        fireEvent.change(username, { target: { value: payload.username } });
        const password = component.getByTestId("password");
        fireEvent.change(password, { target: { value: payload.password } });
        var submitButton = component.getByTestId("submit-button");
        fireEvent.click(submitButton);
        expect(username.value).toEqual(payload.username);
        expect(password.value).toEqual(payload.password);
        expect(dispatch).toHaveBeenCalledTimes(1);
    });

    it("will show error", () => {
        const error = "Username or Password is invalid, please try again!"
        const component = render(
            <MemoryRouter>
                <LogInForm
                    formError={error}
                    dispatch={dispatch}
                />
            </MemoryRouter>
        );
        const errorText = component.getByTestId("form-error")
        expect(errorText.innerHTML).toEqual(error);
    })
});
