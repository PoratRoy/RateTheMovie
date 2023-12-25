import React from "react";
import { Route, Routes } from "react-router-dom";
import path from "./routePath.json";
import FilterPage from "../pages/FilterPage";
import GamePage from "../pages/GamePage";
import Main from "../pages/Main";
import PageNotFound from "../pages/PageNotFound";

const Router: React.FC = () => {
    return (
        <Routes>
            <Route path={path.main} element={<Main />} />
            <Route path={path.filter} element={<FilterPage />} />
            <Route path={path.game} element={<GamePage />} />

            <Route path={path.all} element={<PageNotFound />} />
        </Routes>
    );
};

export default Router;
