import { useState } from "react";

//este hook es gloabal para accederlo desde distintos compomnentes

const initialState = {
    cart: [],
}

const useInitialState = () => {
    const [state, setState] = useState(initialState);
    const addToCart = (payload) => {
        //...state significa, consérvame el state que tenía previamente, por si guardé otros valores
        //...state.cart es un append del payload a lo que ya existía
        setState({
            ...state,
            cart: [...state.cart, payload]
        })
    };

    const removeFromCart = (payload) => {
        setState({
            ...state,
            cart: state.cart.filter(items => items.id != payload.id),
        });
    }

    return {
        state,
        addToCart,
        removeFromCart
    }
}

export default useInitialState;