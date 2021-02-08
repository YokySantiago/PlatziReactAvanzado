import { useEffect, useRef, useState } from 'react'

export const useNearScreen = () => {
  const [show, setShow] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    let observer = null
    Promise.resolve(
      typeof window.IntersectionObserver !== 'undefined'
        ? window.IntersectionObserver
        : import('intersection-observer')
    ).then(() => {
      observer = new window.IntersectionObserver((entries) => {
        const { isIntersecting } = entries[0]
        if (isIntersecting) {
          setShow(isIntersecting)
          observer.disconnect()
        }
      })
      observer.observe(ref.current)
    })

    return () => {
      if (observer) return observer.disconnect
    }
  }, [ref])

  return [show, ref]
}
