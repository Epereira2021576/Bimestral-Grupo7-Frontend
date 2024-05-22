import { useNavigate } from "react-router-dom";
import { Card } from "./Card";

export const Hotels = ({ hotels }) => {
    const navigate = useNavigate();

    const navigateToHotelHandler = (id) => {
        navigate(`/hotel/${id}`);
    };

    return (
        <div className="hotels-container">
            {hotels.map((h) => (
                <Card
                    key={h.id}
                    title={h.title}
                    description={h.description}
                    address={h.address}
                    phone={h.phone}
                    category={h.category}
                    pricePerNight={h.pricePerNight}
                    amenities={h.amenities}
                    navigateToHotelHandler={() => navigateToHotelHandler(h.id)}
                />
            ))}
        </div>
    );
};