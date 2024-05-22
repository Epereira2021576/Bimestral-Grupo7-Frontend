import React, { useEffect } from "react";
import { useHotels } from "../../shared/hooks/useHotels";
import { Hotels } from "../../components/hoteles/Hotels";
import Nav from "../../components/nav/Nav";

import "./hotelPage.css"
import Header from "../../components/nav/Header";
import InfComponent from "../../components/nav/InfComponent";

function HotelPage() {
    const { getHotels, hotels, isFetching } = useHotels();

    useEffect(() => {
        getHotels();
    }, [getHotels]);

    if (isFetching) {
        return <div>Cargando hoteles...</div>;
    }

    return (
        <div>
            <Nav></Nav>
            <Header></Header>
            <Hotels hotels={hotels} />
            <InfComponent></InfComponent>
        </div>
    );
}

export default HotelPage;
