import { useEffect, useState } from 'react'
import Tours from './Tours'
// const url = 'https://course-api.com/react-tours-project'
// const url = 'https://api.aranasayesh.ir/api/company/'
const url = 'https://fakestoreapi.com/products?limit=10'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [tours, setTours] = useState([])

  //====================
  // Fetching function
  // ===================

  const fetchData = async () => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      setTours(data)
      setIsLoading(false)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchData()
  }, [])

  //======================
  // Remove tour function
  // =====================

  const removeTours = (id) => {
    const newTours = tours.filter((tour) => {
      return tour.id !== id
    })
    setTours(newTours)
  }

  if (isLoading) {
    return <div className='loading'></div>
  }
  return (
    <main>
      <div className='title'>
        <h2>Our Products</h2>
        <div className='title-underline'></div>
      </div>
      <Tours tours={tours} removeTours={removeTours} />
    </main>
  )
}

export default App
