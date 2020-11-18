import { useState, useEffect } from 'react'

export const useTlogs = () => {
  const [tlogs, setTlogs] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3003/tlogs')
      .then((res) => res.json())
      .then((logs) => {
        console.log(logs)
        setTlogs(logs)
      })
  }, [])

  return tlogs
}
