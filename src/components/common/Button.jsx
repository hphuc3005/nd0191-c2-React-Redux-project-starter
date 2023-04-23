export const Button = ({ text, onClick, type = "button", style = {} }) => {
    return (
        <button
            style={{ ...style }}
            onClick={onClick}
            type={type}
        >
            {text}
        </button>
    );
};
