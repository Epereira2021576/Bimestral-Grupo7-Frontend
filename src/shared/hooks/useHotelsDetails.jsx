import { useState } from "react";
import { toast } from "react-hot-toast";
import { getHotelsDetails as getHotelsDetailsRequest } from "../../services/api";

export const useHotelsDetails = () => {
    const [hotelsDetails, setHotelsDetails] = useState()

    const getHotelsDetails = async (id) => {
        const responseData = await getHotelsDetailsRequest(id)

        if (responseData.error) {
            return toast.error(
                responseData.e?.response?.data || 'Error al cargar la informacion del hotel'
            )
        }

        setHotelsDetails(responseData)
    }

    return{
        hotelsDetails,
        isFetching: !hotelsDetails,
        getHotelsDetails
    }
}