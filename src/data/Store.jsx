import React from "react";
import { useState } from "react";

const initialState ={
    number: 1249,
    text: 'contex api + hooks'
}
 export const AppContext = React.createContext(initialState)
const Store = props =>{
    const [state ,  setState] = useState(initialState)

    function updateSate(kay, value){
       setState({
        ...state,
        [kay]: value
       })
    }
    return(
      <AppContext.Provider value={{
        number: state.number,
        text: state.text,
        setNumber : n => updateSate('number', n),
        setText: t => updateSate('text', t)

      }}>
        {props.children}
      </AppContext.Provider>
    )
}
export default Store