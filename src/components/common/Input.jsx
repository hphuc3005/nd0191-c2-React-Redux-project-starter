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
                data-testid={inputName}
                name={inputName}
                type={inputType}
                required={required}
                onChange={(e) => onChangeValue(inputName, e.target.value)}
                placeholder={placeholder}
            />
        </div>
    );
};
