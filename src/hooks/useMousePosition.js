import { useState } from "react";

export function useMousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const onMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY })
  }

  return { position, onMouseMove}
}