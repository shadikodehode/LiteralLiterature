import { useRef } from "react";

export function useDragScroll(containerRef) {
  const isDragging = useRef(false)
  const startX = useRef(0)
  const scrollStart = useRef(0)
  const isScrolling = useRef(false)

  const onMouseDown = (e) => {
  isDragging.current = true
  startX.current = e.pageX
  scrollStart.current = containerRef.current.scrollLeft
  }

const onMouseMove = (e) => {
  if (!isDragging.current) return
  const distance = e.pageX - startX.current
  if (Math.abs(distance) > 5) isScrolling.current = true
  containerRef.current.scrollLeft = scrollStart.current - distance
  }

const onMouseUp = () => {
  isDragging.current = false
  setTimeout(() => { isScrolling.current = false }, 50)
  }

  return { onMouseDown, onMouseMove, onMouseUp, isScrolling}
}