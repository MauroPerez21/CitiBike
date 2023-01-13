import * as actionTypes from './shopping-types'
export const addToCart = (itemID) => {
    return {
        type: actionTypes.ADD_TO_CART,
        payload:{id:itemID}
    }
}
export const removeFromCart = (itemID) => {
    return {
        type: actionTypes.REMOVE_FROM_CART,
        payload:{id:itemID}
    }
}
export const adjustQty = (itemID) => {
    return {
        type: actionTypes.ADD_TO_CART,
        payload:{id:itemID}
    }
}
export const loadCurrent = (item) => {
    return {
        type: actionTypes.LOAD_CURRENT_ITEM,
        payload:item
    }
}
export const filterItems = (itemCatg) => {
    return {
        type: actionTypes.FILTER_CURRENT_ITEM,
        payload:{catg:itemCatg}
    }
}
