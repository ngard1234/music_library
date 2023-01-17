import { useEffect, useState, Suspense } from 'react'
import Gallery from './components/Gallery'
import SearchBar from './components/SearchBar'
import { createResource as fetchData } from './helper'
import Spinner from './Spinner'


const App = () => {
  let [searchTerm, setSearchTerm] = useState('')
  let [message, setMessage] = useState('Search for Music!')
  let [data, setData] = useState(null)

  const handleSearch = (e, term) => {
    e.preventDefault()
    setSearchTerm(term)
}

 // const API_URL = 'https://itunes.apple.com/search?term='
  useEffect(() => {
    if (searchTerm) {
        setData(fetchData(searchTerm))
    }
}, [searchTerm]);


const renderGallery = () => {
    if(data){
        return (
            <Suspense fallback={<Spinner />} >
                <Gallery data={data} />
            </Suspense>
        )
    }
}

return (
    <div className="App">
        <SearchBar handleSearch={handleSearch} />
        {message}
        {/* <Suspense fallback={<h1>Loading...</h1>}> */}
             {/* <Gallery data={data} /> */}
        {/* </Suspense> */}
        {renderGallery()}
    </div>
);

}



/*
  useEffect(() => {
      if(search) {
          const fetchData = async () => {
              document.title = `${search} music`
              const response = await fetch(API_URL + search)
              const resData = await response.json()
              if (resData.results.length > 0) {
                  return setData(resData.results)
              } else {
                  return setMessage('Not Found.')
              }
          }
          fetchData()
      }
  }, [search])
  */

  
/*
  return (
      <div>
          <SearchBar handleSearch={handleSearch} />
          {message}
          <Gallery data={data} /> //Gallery is commented out to allow app to run we won't see data displayed on the screen, but we will be able to inspect our DevTools to see what data is storing now!
      </div>
  )
}
*/
export default App
