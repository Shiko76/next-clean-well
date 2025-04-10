'use client'
import { useState, useEffect } from 'react'
import { ChevronUp } from 'lucide-react' // Импортируем иконку ChevronUp из lucide-react

const ButtonScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false)

  const handleScroll = (): void => {
    if (window.scrollY > 200) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        aria-label='Scroll to top'
        className='fixed bottom-5 right-5 p-3 rounded-full bg-accent text-white shadow-lg hover:bg-bg-accent/80 focus:outline-none focus:ring-2 focus:ring-accent/70 focus:ring-opacity-50 transition-all duration-200 ease-in-out z-50 cursor-pointer'>
        <ChevronUp size={24} />
      </button>
    )
  )
}

export default ButtonScrollToTop
