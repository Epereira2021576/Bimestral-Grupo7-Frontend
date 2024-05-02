import { Route, Routes } from "react-router-dom";
import {Hotels} from "../hoteles/Hotels";
import {getHotels} from "../../services";

export const Content= ({hotels}) => {
    return (
        <Routes>
            <Route path="/hoteles" element={<Hotels hotels={hotels} />} />
            <Route path="/hoteles/:id" element={<Hotels hotels={getHotels} />} />
        </Routes>
    )
}