import { useNavigate } from "react-router-dom";
import { HotelCard } from "./HotelCard";

export const Hotels = ({hotels}) => {
    const navigate = useNavigate()

    const handleNavigateToHotel = (id) => {
        navigate(`/hotel/${id}`)
    }

    return(
        <div className="hotels-container">
            {hotels.map((c) => (
                <HotelCard
                    key={c.id}
                    id={c.id}
                    title={c.title}
                    description={c.description}
                    address={c.address}
                    phone={c.phone}
                    category={c.category}
                    pricePerNight={c.pricePerNight}
                    amenities={c.amenities}
                />
            ))}
        </div>
    )
}