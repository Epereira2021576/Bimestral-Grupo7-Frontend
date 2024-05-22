import React from "react";

export const Card = ({
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
        navigateToHotelHandler(id);
    };

    return (
        <div className="hotels-card" onClick={handleNavigate}>
            <span className="hotels-card-title">{title}</span>
            <span className="hotels-card-address">{address}</span>
            <span className="hotels-card-phone">{phone}</span>
            <span className="hotels-card-category">{category}</span>
            <span className="hotels-card-price">{pricePerNight}</span>
            <span className="hotels-card-amenities">{amenities}</span>
            <p className="hotels-card-description">{description}</p>
        </div>
    );
};
