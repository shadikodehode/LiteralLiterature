import { useRef } from "react";

export function useScrollContainer() {
  const containerRef = useRef(null)

  const getScrollDistance = () => {
  const container = containerRef.current
  if (!container) return 0
  const card = container.querySelector('a')
  if (!card) return 0 
  return card.offsetWidth * 3
  }

  const scrollLeft = () => containerRef.current?.scrollBy({ left: -getScrollDistance(), behavior: 'smooth'})
  const scrollRight = () => containerRef.current?.scrollBy({ left: getScrollDistance(), behavior: 'smooth'})

  return { containerRef, scrollLeft, scrollRight }
}