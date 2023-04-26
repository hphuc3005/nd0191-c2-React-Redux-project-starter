export const Tabs = ({ tabList, indexDefaultChecked }) => {
    const inputComponents =
        tabList &&
        tabList.map((item, index) => {
            return (
                <input
                    key={index}
                    className="radio"
                    id={item?.id}
                    name="group"
                    type="radio"
                    defaultChecked={index === indexDefaultChecked}
                />
            );
        });

    const labelComponents =
        tabList &&
        tabList.map((item, index) => {
            return (
                <label
                    key={index}
                    className="tab"
                    id={`${item?.id}-tab`}
                    htmlFor={item?.id}
                >
                    {item?.label}
                </label>
            );
        });

    return (
        <>
            {inputComponents}
            <div className="tabs">{labelComponents}</div>
        </>
    );
};
