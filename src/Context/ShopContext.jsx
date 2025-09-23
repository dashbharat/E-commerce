import React,{ createContext, useState } from "react";
import all_product from "../Components/Assets/all_product"



 const getDefaultCart=()=>{
        let cart={};
        for (let product of all_product){
            cart[product.id]=0
        }
        return cart;
    }


export const ShopContext=createContext(null);
const ShopContextProvider=(props)=>{
    const [cartItem,setCartItems]=useState(getDefaultCart())
    const addToCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }
    const removeFromCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }




   



    const contextValue={all_product,cartItem,addToCart,removeFromCart};
    
    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )

}
export default ShopContextProvider;