import { useState } from "react"
import Home from "./components/Home/Home"
import {BrowserRouter,Route,Routes} from "react-router-dom"
import FavPage from "./components/FavPage/FavPage"
import FavoriteItems from "./components/context/favoriteItem/FavoriteItem"


function App() {
    const [favoriteItems , setFavoriteItems] = useState([])

 return(
  <>
        {

          <FavoriteItems.Provider value={{
            favoriteItems,
            setFavoriteItems
          }}>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/favorite" element={<FavPage />} />
              </Routes>
            </BrowserRouter>
          </FavoriteItems.Provider>

      }

  </>
 )
}

export default App
