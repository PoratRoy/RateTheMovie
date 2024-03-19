import React from "react";
import { Route, Routes } from "react-router-dom";
import path from "./routePath.json";
import GamePage from "../pages/GamePage";
import LandingPage from "../pages/LandingPage";
import PageNotFound from "../pages/PageNotFound";
import GuestPage from "../pages/GuestPage";
import PreviewPage from "../pages/PreviewPage";

const Router: React.FC = () => {
    return (
        <Routes>
            <Route path={path.land} element={<LandingPage />} />
            <Route path={path.game} element={<GamePage />} />
            <Route path={path.guest} element={<GuestPage />} />
            <Route path={path.preview} element={<PreviewPage />} />

            <Route path={path.all} element={<PageNotFound />} />
        </Routes>
    );
};

export default Router;
