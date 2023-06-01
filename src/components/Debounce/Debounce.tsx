import React from 'react'

// value - отслеживаемая переменная
// debouncesValue использовать в массиве зависимостей, в теле useEffect actions
export const Debounce = <T,>(value: T, delay?: number): T => {
  const [debouncedValue, setDebouncedValue] = React.useState<T>(value)

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value)
    }, delay || 500)

    return () => {
      clearTimeout(timer)
    }
  }, [value, delay])

  return debouncedValue
}
