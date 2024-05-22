import { useState } from "react"
import { useHotels } from "../../shared/hooks"
import { Hotels } from "../../components/hoteles/Hotels"

function HotelPage() {
  return (
    <div>
      <Hotels />
    </div>
  )
}

export default HotelPage
