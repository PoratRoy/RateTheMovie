import React, { useState } from "react";
import Card from "../../core/Card";
import CardView from "../../../view/CardView";
import { placeholderCardType } from "../../../../models/types/card";
import CardEventLayout from "../../../layout/CardEventLayout";
import { PreviewCardProps } from "../../../../models/types/props/card";
import Movie from "../../core/Movie";
import { cardAnimation_click } from "../../../../models/initialization/card";

const PreviewCard: React.FC<PreviewCardProps> = ({ movie }) => {
    const [openCardView, setOpenCardView] = useState<boolean>(false);
    const [openShadow, setOpenShadow] = useState<boolean>(false);

    return (
        <React.Fragment>
            <CardEventLayout setOpenCardView={setOpenCardView} setOpenShadow={setOpenShadow}>
                <Card
                    type={{ t: "Preview" } as placeholderCardType}
                    front={<Movie isShadow={openShadow} size="large" movie={movie} actions={cardAnimation_click} />}
                />
            </CardEventLayout>
            {openCardView ? <CardView movie={movie} close={() => setOpenCardView(false)} /> : null}
        </React.Fragment>
    );
};

export default PreviewCard;
