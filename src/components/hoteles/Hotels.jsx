import { useNavigate } from "react-router-dom";
import { Card } from "./Card";

export const Hotels = ({ hotels = [] }) => {
    const navigate = useNavigate();

    const navigateToHotelHandler = (id) => {
        navigate(`/hotel/${id}`);
    };

    if (!hotels.length) {
        return <div>No hay hoteles disponibles.</div>;
    }

    return (
        <div className="hotels-container">
            {hotels.map((hotel) => (
                <Card
                    key={hotel._id} // Asegúrate de que la clave sea única
                    id={hotel._id}
                    title={hotel.name}
                    description={hotel.description}
                    address={hotel.address}
                    phone={hotel.phone}
                    category={hotel.category}
                    pricePerNight={hotel.pricePerNight} // Asegúrate de que este campo exista en tus datos
                    amenities={hotel.amenities}
                    navigateToHotelHandler={navigateToHotelHandler} // Esta es una función
                />
            ))}
        </div>
    );
};
