import { memo } from "react";

const TabItems = ({ data }) => {
    return (
        <>
            <p>{ data }</p>
        </>
    );
}

export default memo(TabItems);