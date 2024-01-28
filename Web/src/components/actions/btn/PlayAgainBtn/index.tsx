import React from "react";
import PrimaryBtn from "../../core/button/PrimaryBtn";

const PlayAgainBtn: React.FC = () => {
    const handleRefresh = () => {};

    return <PrimaryBtn title="Play Again" onClicked={handleRefresh} size="large" />;
};

export default PlayAgainBtn;
