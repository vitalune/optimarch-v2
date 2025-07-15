import { useState, useEffect } from 'react'

export const smoothScrollTo = (elementId: string) => {
  const element = document.getElementById(elementId.replace('#', ''))
  
  if (element) {
    const offset = 80 // Navigation height offset
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
    const targetPosition = elementPosition - offset

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    })
  }
}

export const useScrollSpy = (sections: string[]) => {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section.replace('#', ''))
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check

    return () => window.removeEventListener('scroll', handleScroll)
  }, [sections])

  return activeSection
}