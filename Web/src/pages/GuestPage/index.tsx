import React from "react";
import Multiplayer from "../../components/landing/Multiplayer";
import GuestLayout from "../../components/layout/GuestLayout";

const GuestPage: React.FC = () => {
    return (
        <GuestLayout>
            <Multiplayer playerRole="player"/>
        </GuestLayout>
    );
};

export default GuestPage;
