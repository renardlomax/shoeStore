import React, { useState, useEffect } from 'react'
import { Products, NavBar, Cart} from './components'
import { commerce } from './library/commerce'

const App = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState({})

     const getProducts = async () => {
        const { data } = await commerce.products.list()
        setProducts(data)
    }

        const fetchCart = async () => {
        setCart(await commerce.cart.retrieve())
    }
    console.log(cart)

    const handleAddToCart = async (productId, quantity) => {
        const item = await commerce.cart.add(productId, quantity)
        setCart(item.cart)
   
    }
     useEffect(() => {
        getProducts();
        fetchCart();
  
    }, [])
    console.log({cart})
     

    return (
        <div>
            Renard's Fly Kicks Store
           
            <NavBar totalItems={cart.total_items}/>
             {/* <Products products={products} onAddToCart={handleAddToCart}  /> */}
             <Cart  cart={cart}/>
        </div>
        
    )
}

export default App

