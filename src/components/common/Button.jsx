export const Button = ({ text, onClick, disabled, type = "button", style = {} }) => {
    return (
        <button
            style={{ ...style }}
            onClick={onClick}
            type={type}
            disabled={disabled}
        >
            {text}
        </button>
    );
};
