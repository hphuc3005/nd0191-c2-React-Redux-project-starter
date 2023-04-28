export const Button = ({ id, text, onClick, disabled, type = "button", style = {} }) => {
    return (
        <button
            id={id}
            data-testid={id}
            style={{ ...style }}
            onClick={onClick}
            type={type}
            disabled={disabled}
        >
            {text}
        </button>
    );
};
