import Gallery from './components/Gallery';
import SearchBar from './components/SearchBar';
import AlbumView from './components/AlbumView';
import ArtistView from './components/ArtistView';
import { useRef, useState, Suspense } from 'react';
import { BrowserRouter as Routes, Route } from 'react-router-dom';
import {DataContext} from './context/DataContext'
import { SearchContext } from './context/SearchContext';
import './App.css'
import { createResource as fetchData } from './helper';
import Spinner from './Spinner';

function App() {
let searchInput = useRef('')
let [data, setData] = useState(null)
//let [message, setMessage] = useState('Search For Music')

 // const API_URL = 'https://itunes.apple.com/search?term='

  
  const handleSearch = (e, term) => {
    e.preventDefault()
    setData(fetchData(term, 'main'))
  }

  const renderGallery = () => {
    if(data){
        return (
            <Suspense fallback={<Spinner />} >
                <Gallery />
            </Suspense>
        )
    }
  }


  return (
    <div className='App'>      
      {/* {message} */}
      {'Search For Music'}
      
      
        <Routes>
            <Route exact path={'/'}>
                <SearchContext.Provider value={{term: searchInput, handleSearch: handleSearch}}>
                <SearchBar/>
                </SearchContext.Provider>
            </Route >
            <Route exact path={'/'}>      
                <DataContext.Provider value={data}>
                {renderGallery}
                </DataContext.Provider>                
            </Route>
            
            <Route path='/album/:id'>
              <AlbumView/>
            </Route> 
            <Route path='/artist/:id'>
              <ArtistView/>
            </Route>
        </Routes>
    
      
    </div>
  );
}

export default App;