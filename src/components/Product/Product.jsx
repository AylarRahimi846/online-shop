import CSS from './product.module.css'

function Product({data}){
    return(
     <>
         <div className={CSS.product}>
            <div className={CSS.image}><img src={data.image} alt="" /></div>
            <div className={CSS.about}>
                <h3 className={CSS.title}>{data.title}</h3>
                <p className={CSS.desc}>category: {data.category}</p>
                <p className={CSS.price}>{data.price}$</p>
            </div>
        </div>
     </>
    )
}

export default Product