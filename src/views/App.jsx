import './App.css'
import React from 'react'
import { BrowserRouter } from  'react-router-dom'
import DataContext,{data } from '../data/DataContext.js'
import Menu from '../components/layout/Menu'
import Content from '../components/layout/Content'
import { useState } from 'react'
import Store from '../data/Store.jsx'

const App = props => {
const [state ,  setState] = useState(data)

    return (

       < Store >
       
       
        <DataContext.Provider value={{state, setState}}>

              <div className="App">
                    <BrowserRouter>
                        <Menu />
                        <Content />
                    </BrowserRouter>
                </div>
  
        </DataContext.Provider>
       
       </Store>
              
    )
}

export default App