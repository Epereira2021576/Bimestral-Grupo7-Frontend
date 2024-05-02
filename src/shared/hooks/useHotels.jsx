import { useState } from "react";
import toast from "react-hot-toast";
import { getHotels as getHotelsRequest } from "../../services/api";

export const useHotels = () => {
    const [hotels, setHotels] = useState([])

    const getHotels = async (isLogged = false) => {
        const hotelsData = await getHotelsRequest()
        if (hotelsData.error) {
            return toast.error(
                hotelsData.e?.response?.data || 'Ocurrio un error al leer los hoteles'
            )
        }

        if (!isLogged) {
            return setHotels({
                hotels: hotelsData.data.hotels
            })
        }

        setHotels({
            hotels: hotelsData.data.hotels
        })
    }

    return {
        getHotels,
        isFetching: !Boolean(hotels),
        allHotels: hotels?.hotels
    }
}

