import { toast } from "react-hot-toast";
import { reserveRoom as reserveRoomRequest } from "../../services";

export const useReserveRoom = () => {
    const reserveRoom = async (hotelId, onSuccess) => {
        const responseData = await reserveRoomRequest(hotelId)

        if (responseData.data) {
            return toast.error(
                responseData.e?.response?.data || 'Ocurrio un error al conseguir una habitacion'
            )
        }

        toast.success('Se registro a una habitacion en este hotel')
        
        onSuccess(true)
    }

    return{
        reserveRoom
    }
}