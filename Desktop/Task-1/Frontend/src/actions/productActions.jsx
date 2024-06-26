import axios from "axios";
import { PRODUCTS_LIST_FAIL, PRODUCTS_LIST_REQUEST, PRODUCTS_LIST_SUCCESS } from "../constants/productConstants"

export const listProducts = () => async(dispatch) =>{
    try{
        dispatch({type: PRODUCTS_LIST_REQUEST})

    const {data} = await axios.get("http://localhost:7000/api/products")
    dispatch({
        type : PRODUCTS_LIST_SUCCESS,
        payload : data
    })
    }catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: PRODUCTS_LIST_FAIL,
      payload: message,
    })}
}