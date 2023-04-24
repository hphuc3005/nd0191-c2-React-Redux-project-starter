export const Input = ({
    inputLabel,
    inputType,
    inputName,
    required,
    onChangeValue,
    placeholder,
}) => {
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
                required={required}
                onBlur={(e) => onChangeValue(inputName, e.target.value)}
                placeholder={placeholder}
            />
        </div>
    );
};
