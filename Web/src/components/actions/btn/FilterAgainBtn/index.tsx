import React from "react";
import SecondaryBtn from "../../core/button/SecondaryBtn";
import useClear from "../../../../hooks/useClear";
import path from "../../../../router/routePath.json";

const FilterAgainBtn: React.FC = () => {
    const { handleClear } = useClear();

    const handleBack = () => {
        handleClear(path.land);
    };

    return <SecondaryBtn onClicked={handleBack} title="Exsit" />;
};

export default FilterAgainBtn;
