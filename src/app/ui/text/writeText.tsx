'use client'

import { useEffect, useState } from 'react'

type WriteTextProps = {
  data: string[]
  className?: string
}

export default function WriteText({ data, className }: WriteTextProps) {
  const [text, setText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentPos, setCurrentPos] = useState(0)

  useEffect(() => {
    let timeout: NodeJS.Timeout

    const updateText = () => {
      const currentPhrase = data[currentIndex]
      setText(currentPhrase.substring(0, currentPos))

      if (currentPos === currentPhrase.length) {
        setTimeout(() => {
          setText('')
          setCurrentIndex(prev => (prev + 1) % data.length)
          setCurrentPos(0)
        }, 1500)
      } else {
        setText(prev => prev + '|')
        setCurrentPos(prev => prev + 1)
        timeout = setTimeout(updateText, 200)
      }
    }

    timeout = setTimeout(updateText, 200)
    return () => clearTimeout(timeout)
  }, [currentIndex, currentPos, data])

  return <span className={className ? className : ''}>{text}</span>
}
