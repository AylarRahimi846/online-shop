import { useContext } from 'react'
import CSS from './product.module.css'
import Heart from '../Heart/Heart'
import FavoriteItems from '../context/favoriteItem/FavoriteItem'

function Product({data}){

    const { favoriteItems, setFavoriteItems } = useContext(FavoriteItems)

    const isFavorite = favoriteItems.find((item) => item.id === data.id);

    function handleClick() {
        if (!isFavorite) {
            setFavoriteItems([...favoriteItems, data])
        }
        else {
            setFavoriteItems(favoriteItems.filter(item => {
                return item.id !== data.id
            }))
        }}
    
    return(
     <>
         <div className={CSS.product}>
            <div className={CSS.image}><img src={data.image} alt="" /></div>
            <div className={CSS.text}>
                <h3 className={CSS.title}>{data.title}</h3>
                <p className={CSS.desc}>category: {data.category}</p>
                <div className={CSS.favorite}>
                <p className={CSS.price}>{data.price}$</p>
                <Heart onClick={handleClick} fill={isFavorite ? "red" : ""} />
                </div>
            </div>
        </div>
     </>
    )
}

export default Product