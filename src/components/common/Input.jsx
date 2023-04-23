export const Input = ({ inputLabel, inputType, inputName, required, value, onChangeValue }) => {
    return (
        <div>
            <label
                htmlFor={inputName}
                required={required}
            >
                {inputLabel}
            </label>
            <input
                id={inputName}
                name={inputName}
                type={inputType}
                value={value}
                required={required}
                onChange={(e) => onChangeValue(inputName, e.target.value)}
            />
        </div>
    );
};
