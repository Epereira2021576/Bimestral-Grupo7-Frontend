export const Card = () => ({
    title,
    id,
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
        <div className="hotels-card" onClick={handleNavigate}>
            <span className="hotels-card-title">{title}</span>
            <span className="hotels-card-title">{address}</span>
            <span className="hotels-card-title">{phone}</span>
        </div>
    )
}

