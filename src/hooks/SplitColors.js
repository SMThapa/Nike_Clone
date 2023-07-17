import { useState } from "react"

export const SplitColors = (color) => {
    const [theColor, setColor] = useState([])
    setColor(color.theColor.join('/'))
  return theColor
}
