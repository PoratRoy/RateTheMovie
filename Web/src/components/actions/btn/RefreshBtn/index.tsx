import React from "react";
import SecondaryBtn from "../../core/button/SecondaryBtn";

const RefreshBtn: React.FC = () => {
    const handleOnLoad = () => {};
    return <SecondaryBtn title="Refresh" onClicked={handleOnLoad}/>;
};

export default RefreshBtn;
