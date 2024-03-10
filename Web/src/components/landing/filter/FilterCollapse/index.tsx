import React from "react";
import style from "./FilterCollapse.module.css";
import { FilterCollapseProps } from "../../../../models/types/props/filter";
import ToggelArrow from "../../../actions/widgets/ToggelArrow";
import useToggle from "../../../../hooks/global/useToggle";
import Collapse from "../../../actions/Collapse";

const FilterCollapse: React.FC<FilterCollapseProps> = ({ children }) => {
    const [isOpen, toggle] = useToggle(false);

    const handleCollapse = () => {
        toggle();
        //TODO: add scrolling
        //TODO: change all the height
    };

    return (
        <section className={style.filterCollapseContainer}>
            <div>Change filters</div>
            <ToggelArrow
                startDirection="down"
                endDirection="up"
                isOpen={isOpen}
                handleOnClick={handleCollapse}
            />
            <Collapse isOpen={isOpen}>
                <section className={style.collapseForm}>{children}</section>
            </Collapse>
        </section>
    );
};

export default FilterCollapse;
