import React, { useState } from "react";
import Card from "../../core/Card";
import CardEventLayout from "../../../layout/CardEventLayout";
import { PreviewCardProps } from "../../../../models/types/props/card";
import Movie from "../../core/Movie";

const PreviewCard: React.FC<PreviewCardProps> = ({ movie }) => {
    const [openShadow, setOpenShadow] = useState<boolean>(false);

    return (
        <CardEventLayout setOpenShadow={setOpenShadow}>
            <Card
                content={
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
