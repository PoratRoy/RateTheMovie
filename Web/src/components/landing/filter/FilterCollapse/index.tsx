import React from "react";
import style from "./FilterCollapse.module.css";
import { FilterCollapseProps } from "../../../../models/types/props/filter";
import ToggleArrow from "../../../actions/widgets/toggle/ToggleArrow";
import useToggle from "../../../../hooks/global/useToggle";
import Collapse from "../../../actions/widgets/Collapse";

const FilterCollapse: React.FC<FilterCollapseProps> = ({ children }) => {
    const [isOpen, toggle] = useToggle(false);

    const handleCollapse = () => {
        toggle();
        //TODO: add scrolling
        //TODO: change all the height
    };

    return (
        <section className={style.filterCollapseContainer}>
            <div>Advanced settings</div>
            <ToggleArrow
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
