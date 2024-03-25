import React, { useState } from "react";
import Card from "../../core/Card";
import { placeholderCardType } from "../../../../models/types/card";
import CardEventLayout from "../../../layout/CardEventLayout";
import { PreviewCardProps } from "../../../../models/types/props/card";
import Movie from "../../core/Movie";

const PreviewCard: React.FC<PreviewCardProps> = ({ movie }) => {
    const [openShadow, setOpenShadow] = useState<boolean>(false);

    return (
        <CardEventLayout setOpenShadow={setOpenShadow}>
            <Card
                type={{ t: "Preview" } as placeholderCardType}
                front={
                    <Movie
                        isShadow={openShadow}
                        size="large"
                        movie={movie}
                        actions={["doubleClick"]}
                    />
                }
            />
        </CardEventLayout>
    );
};

export default PreviewCard;
