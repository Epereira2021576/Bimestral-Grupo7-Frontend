import axios from "axios";

const apiClient = axios.create( {
    baseURL: 'http://127.0.0.1:3001/HotelManagement/v1',
    timeout: 1000
} )

export const login = async ( data ) => {
    try {
        return await apiClient.post( '/auth/login', data )
    } catch ( e ) {
        return {
            error: true,
            e
        }
    }
}

export const register = async ( data ) => {
    try {
        return await apiClient.post( '/auth/register', data )
    } catch ( e ) {
        return {
            error: true,
            e
        }
    }
}

export const getHotels = async () => {
    try {
        return await apiClient.get('/hoteles')
    } catch (e) {
        return{
            error: true,
            e
        }
    }
}

export const getHotelsDetails = async (hotelId) => {
    try {
        return await apiClient.get(`/hoteles/${hotelId}`)
    } catch (e) {
        return{
            error: true,
            e
        }
    }
}

export const reserveRoom = async (hotelId) => {
    try {
        return await apiClient.post('/hotel/reserve', {hotelId})  
    } catch (e) {
        return{
            error: true,
            e
        }
    }
}