import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

    const [cartItem,setCartItem] = useState({});

    const addToCartItem = (itemId) => {
        if(!cartItem[itemId]){
            setCartItem((prev) => ({...prev,[itemId]:1}));
        }
        else {
            setCartItem((prev) => ({...prev,[itemId]:prev[itemId]+1}));
        }
    }
    
    const removeFromCart = (itemId) => {
        setCartItem((prev) => ({...prev,[itemId]:prev[itemId]-1}))
    }

    useEffect(() => {
         console.log(cartItem)
    },[cartItem])

    const contextValue = {
       food_list,
       cartItem,
       setCartItem,
       addToCartItem,
       removeFromCart
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider