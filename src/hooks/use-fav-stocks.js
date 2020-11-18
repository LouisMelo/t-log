import { useState, useEffect } from 'react'

export const useFavStocks = () => {
  const [stocks, setStocks] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3003/stocks')
      .then((res) => res.json())
      .then(stocks => {
        setStocks(stocks)
      })
  }, [])

  return stocks
}
