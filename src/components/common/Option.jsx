import { Button } from "./Button";

export const Option = ({ value, handleClick, option, selected, disabled }) => {
    const onClick = () => {
        handleClick(option);
    };

    return (
        <div className="option">
            <div>
                <p>{value}</p>
            </div>
            <Button
                text={selected ? "Chosen" : "Click"}
                disabled={disabled}
                onClick={onClick}
            />
        </div>
    );
};
