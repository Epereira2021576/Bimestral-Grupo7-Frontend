
/* eslint-disable react/prop-types */
/*import { getHotels } from "../../services";*/
import { useReserveRoom, useHotelsDetails } from "../../shared/hooks";

const ReserveButton = ({ hotelId, getHotels }) => {
    const { reserveRoom } = useReserveRoom();

    const handleReserveRoom = () => {
        reserveRoom(hotelId, getHotels)
    }

    return <button onClick={handleReserveRoom} className="hotal-reserve-button">Reservar Habitacion</button>
}

export const HotelDescription = ({
    title,
    description,
    address,
    phone,
    category,
    pricePerNight,
    amenities,
    hotelId,
    getHotels
}) => {
    const { isLogged } = useHotelsDetails()

    return (
        <div className="hotel-description-container">
            <span className="hotel-description-title">
                {title}
                <span>
                    {isLogged && (
                        <ReserveButton
                            className='hotel-reserve-button'
                            hotelId={hotelId}
                            getHotels={getHotels}
                        />
                    )}
                </span>
            </span>
            <div className="hotel-description-box">
                <span className="hotel-description">{description}</span>
                <span className="hotel-address">{address}</span>
                <span className="hotel-phone">{phone}</span>
                <span className="hotel-category">{category}</span>
                <span className="hotel-price">{pricePerNight}</span>
                <span className="hotel-amenities">{amenities}</span>
            </div>
        </div >
    )
}