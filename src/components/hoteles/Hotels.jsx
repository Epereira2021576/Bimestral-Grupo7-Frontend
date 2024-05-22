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
        <div className="flex justify-center">
            <div className="hotels-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {hotels.map((hotel) => (
                    <div key={hotel._id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <img className="w-full h-64 object-cover" src="https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg" alt={hotel.name} />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold text-gray-800">{hotel.name}</h3>
                            <p className="text-sm text-gray-600">{hotel.description}</p>
                            <div className="mt-2">
                                <span className="text-gray-800 font-semibold">Dirección:</span>
                                <span className="text-sm text-gray-600"> {hotel.address}</span>
                            </div>
                            <div className="mt-2">
                                <span className="text-gray-800 font-semibold">Teléfono:</span>
                                <span className="text-sm text-gray-600"> {hotel.phone}</span>
                            </div>
                            <div className="mt-2">
                                <span className="text-gray-800 font-semibold">Categoría:</span>
                                <span className="text-sm text-gray-600"> {hotel.category}</span>
                            </div>
                            <div className="mt-2">
                                <span className="text-gray-800 font-semibold">Precio por noche:</span>
                                <span className="text-sm text-gray-600"> {hotel.pricePerNight}</span>
                            </div>
                            <button
                                onClick={() => navigateToHotelHandler(hotel._id)}
                                className="mt-4 w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors"
                            >
                                Ver Hotel
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
