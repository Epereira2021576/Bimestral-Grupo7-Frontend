import { Route, Routes } from "react-router-dom";
import { Hotels } from "../hoteles/Hotels";

export const Content = ( { hotels, getHotels } ) => {
    return (
        <Routes>
            <Route path="hoteles" element={<Hotels hotels={hotels} />} />
            <Route path="hoteles/:id" element={<Hotels hotels={getHotels} />} />
        </Routes>
    )
}