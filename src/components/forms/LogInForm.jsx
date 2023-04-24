import { Form } from "../common/Form";
import { Input } from "../common/Input";
import { updateUserData } from "../../store/pollsDataAsyncActions";

export const LogInForm = ({ formError, dispatch }) => {
    const handleSubmit = (formData) => {
        dispatch(updateUserData(formData));
    };

    return (
        <Form
            formLabel="Login"
            submitText="Submit"
            handleSubmit={handleSubmit}
            formError={formError}
            extraTitle={
                <div className="login-image">
                    <img
                        src="/images/login_image.jpg"
                        alt="User Avatar"
                        style={{ maxWidth: "100%", marginBottom: 10 }}
                    />
                    <br />
                </div>
            }
        >
            <Input
                inputName="username"
                placeholder="Your Username"
                inputType="text"
                inputLabel="Username"
                required={true}
            />
            <Input
                inputName="password"
                placeholder="Your Password"
                inputType="password"
                inputLabel="Password"
                required={true}
            />
        </Form>
    );
};
