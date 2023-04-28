import { updateQuestion } from "../../store/pollsDataAsyncActions";
import { Form } from "../common/Form";
import { Input } from "../common/Input";

export const NewPoll = ({ authedUserId, dispatch, isLoading, navigate }) => {
    const handleSubmit = (formData) => {
        dispatch(updateQuestion({ ...formData, author: authedUserId }));
        navigate("/");
    };

    return (
        <>
            {!isLoading && (
                <Form
                    formLabel="Would You Rather"
                    submitText="Submit"
                    handleSubmit={handleSubmit}
                    extraTitle={
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <p>Create Your Own Poll</p>
                        </div>
                    }
                >
                    <Input
                        inputName="optionOneText"
                        placeholder="Option One"
                        inputType="text"
                        inputLabel="First Option"
                        required={true}
                    />
                    <Input
                        inputName="optionTwoText"
                        placeholder="Option Two"
                        inputType="text"
                        inputLabel="Second Option"
                        required={true}
                    />
                </Form>
            )}
        </>
    );
};
