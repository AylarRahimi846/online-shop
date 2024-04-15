import useFetch from '../../hooks/useFetch'
import CSS from './filterBar.module.css'

function FilterBar(){

    const categories = useFetch('https://fakestoreapi.com/products/categories')
    return(
        <>
           <div className={CSS.filterBar}>
            {categories.map(category =>{
                return <p key={category} className={CSS.filterBtn}>{category}</p>
            })}
        </div>
        </>
    )
}

export default FilterBar