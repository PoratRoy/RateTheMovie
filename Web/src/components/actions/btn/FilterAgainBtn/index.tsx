import React from "react";
import SecondaryBtn from "../../core/button/SecondaryBtn";

const FilterAgainBtn: React.FC = () => {
    const handleFilter = () => {};

    return <SecondaryBtn onClicked={handleFilter} title="Filter Movies" />;
};

export default FilterAgainBtn;
