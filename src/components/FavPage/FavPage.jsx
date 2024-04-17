import { useContext } from "react"
import CSS from "./favPage.module.css"
import Header from "../Header/Header"
import Product from "../Product/Product"
import FavoriteItems from "../context/favoriteItem/FavoriteItem"



function FavPage() {
    const { favoriteItems } = useContext(FavoriteItems)
    return (
        <>
            <Header />
            <h1 className={CSS.heading}>Favorite Products</h1>
            <div className={CSS.favoriteContainer}>
                {(favoriteItems.length > 0) ?
                    favoriteItems.map(item => {
                        return <Product key={item.id} data={item} />
                    }) :
                    <p>there is no favorite item</p>
                }
            </div>
        </>

    )
}

export default FavPage