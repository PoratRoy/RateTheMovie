import React from "react";
import PreviewLayout from "../layout/PreviewLayout";

//TODO: in use?
const PreviewPage: React.FC = () => {
    return (
        <PreviewLayout hasFooter>
            <div>Double click on the movie to see more details</div>
            {/* TODO: pack of all the movies */}
        </PreviewLayout>
    );
};

export default PreviewPage;
