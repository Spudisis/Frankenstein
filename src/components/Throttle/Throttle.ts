import { useRef } from 'react'

export const useThrottle = (
  func: any,

  delay: number,
  cleanUp = false
) => {
  const timeoutRef = useRef<null | NodeJS.Timeout>(null)
  const isFunctionRunning = useRef(false)

  function clearTimer () {
    if (timeoutRef.current != null) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
  }

  function runFunction (e: any) {
    func(e)
    isFunctionRunning.current = false
  }

  return (e?: any) => {
    if (!isFunctionRunning.current) {
      isFunctionRunning.current = true
      clearTimer()
      timeoutRef.current = setTimeout(() => {
        runFunction(e)
      }, delay)
    }
  }
}
