import React from "react";
import SecondaryBtn from "../../core/button/SecondaryBtn";
import useClear from "../../../../hooks/useClear";

const FilterAgainBtn: React.FC = () => {
    const { handleClear } = useClear();

    const handleBack = () => {
        handleClear();
    };

    return <SecondaryBtn onClicked={handleBack} title="Exsit" />;
};

export default FilterAgainBtn;
