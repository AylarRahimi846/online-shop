import {useEffect ,useState } from "react"
import useFetch from "../../hooks/useFetch"
import Products from "../context/products/Products"
import Header from "../Header/Header"
import CSS from './home.module.css'
import FilterBar from "../FilterBar/FilterBar"
import ProductsContainer from "../ProductsContainer/ProductsContainer"
import FavoriteItems from "../context/favoriteItem/FavoriteItem"





function Home(){
const [products,setProducts]=useState([])
const [filteredProducts , setFilteredProducts] = useState([])
const [favoriteItems, setFavoriteItems] = useState([])
const data = useFetch('https://fakestoreapi.com/products')

useEffect(() => {
  setProducts(data)
  setFilteredProducts(data)
},[data])

    return(

    <>
        <Products.Provider  value={{
          products,
          filteredProducts,
          setFilteredProducts
        }}>


       <FavoriteItems.Provider value={{
                    favoriteItems,
                    setFavoriteItems
                }}>


    <Header />
    <div className={CSS.heading}>
      <p className={CSS.starter}>Welcome to our store</p>
      <h1 className={CSS.title}>Buy in safety, with pleasure</h1>
    </div>
    <FilterBar />
    <ProductsContainer />
    </FavoriteItems.Provider>
    </Products.Provider>
    </>

    )
}

export default Home