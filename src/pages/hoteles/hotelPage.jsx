import React, { useEffect } from "react";
import { useHotels } from "../../shared/hooks/useHotels";
import { Hotels } from "../../components/hoteles/Hotels";

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
            <Hotels hotels={hotels} />
        </div>
    );
}

export default HotelPage;
