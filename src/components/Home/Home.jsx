import {useEffect ,useState } from "react"
import useFetch from "../../hooks/useFetch"
import Products from "../context/products/Products"
import Header from "../Header/Header"
import CSS from './home.module.css'
import FilterBar from "../FilterBar/FilterBar"
import ProductsContainer from "../ProductsContainer/ProductsContainer"





function Home(){
const [products,setProducts]=useState([])
const [filteredProducts , setFilteredProducts] = useState([])
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


    <Header />
    <div className={CSS.heading}>
      <p className={CSS.starter}>Welcome to our store</p>
      <h1 className={CSS.title}>Buy in safety, with pleasure</h1>
    </div>
    <FilterBar />
    <ProductsContainer />
    </Products.Provider>
    </>

    )
}

export default Home