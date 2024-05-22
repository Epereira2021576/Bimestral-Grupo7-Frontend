import { useHotels } from "../../shared/hooks"

const imageUrl = ''

const HotelVista = ({ url }) => {
    return (
        <div className="hotels-vista-container">
            <img src={url ? url : imageUrl} width='100%' height='100%' alt="Default vista" />
        </div>
    )
}



export const HotelCard = ({
    title,
    description,
    address,
    phone,
    category,
    pricePerNight,
    amenities,
    navigateToHotelHandler
}) => {
    const handleNavigate = () => {
        navigateToHotelHandler(id)
    }

    return (
        <div className="hotel-card" onClick={handleNavigate}>
            <HotelVista url={imageUrl} />
            <span className="hotel-card-title">{title}</span>
            <span className="hotel-card-title">{description}</span>
            <span className="hotel-card-title">{address}</span>
            <span className="hotel-card-title">{phone}</span>
            <span className="hotel-card-title">{category}</span>
            <span className="hotel-card-title">{pricePerNight}</span>
            <span className="hotel-card-title">{amenities}</span>
        </div>
    );
}