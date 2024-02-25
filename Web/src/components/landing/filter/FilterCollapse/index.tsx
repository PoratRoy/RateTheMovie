import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import style from "./FilterCollapse.module.css";
import { FilterCollapseProps } from "../../../../models/types/props/filter";

const FilterCollapse: React.FC<FilterCollapseProps> = ({ children }) => {
    const [isCollapse, setIsCollapse] = useState<boolean>(false);
    const [isIconClose, setIsIconClose] = useState<boolean>(false);

    const handleCollapse = () => {
        setIsCollapse((prev) => !prev);
        setIsIconClose((prev) => !prev);
        //TODO: add scrolling 
        //TODO: change all the height
    };

    return (
        <section className={style.filterCollapseContainer}>
            <div>Change filters</div>
            <div
                onClick={handleCollapse}
                className={isIconClose ? style.collapseBtnOpen : style.collapseBtnClose}
            >
                <IoIosArrowDown />
            </div>
            {isCollapse ? <section className={style.collapseForm}>{children}</section> : null}
        </section>
    );
};

export default FilterCollapse;
