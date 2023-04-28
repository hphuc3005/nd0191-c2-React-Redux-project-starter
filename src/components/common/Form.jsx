import React, { useState } from "react";
import { Button } from "./Button";

export const Form = ({ formLabel, submitText, children, handleSubmit, formError, extraTitle }) => {
    const [formData, setFormData] = useState({});

    const onSubmit = (event) => {
        event.preventDefault();
        handleSubmit(formData);
    };

    const onChangeValue = (fieldName, value) => {
        setFormData((prevData) => ({
            ...prevData,
            [fieldName]: value,
        }));
    };

    const renderChildren = () => {
        return React.Children.map(children, (child) => {
            return React.cloneElement(child, {
                onChangeValue,
            });
        });
    };

    return (
        <form
            onSubmit={onSubmit}
            data-testid={"form"}
        >
            <h1>{formLabel}</h1>
            {extraTitle}
            {renderChildren()}
            {formError && (
                <div
                    className="error"
                    data-testid={"form-error"}
                >
                    {formError}
                </div>
            )}
            <br />
            <Button
                id={"submit-button"}
                type={"submit"}
                text={submitText}
            />
        </form>
    );
};
