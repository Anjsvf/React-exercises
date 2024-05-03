import React from 'react'
import PageTitle from '../../components/layout/PageTitle'
import { useState } from 'react'

const UseCallback = (props) => {
    const [count, setCount] = useState(0)
    function inc(delta){
        setCount(count + delta)

    }
    return (
        <div className="UseCallback">
            <PageTitle
                title="Hook UseCallback"
                subtitle="Retorna uma função memoizada!"
            />
            <span className="text">{count}</span>
            <div className="btn" > 
            
          
                <button className="btn" onClick={() => inc(6)}>+6</button>

                <button className="btn"  onClick={() => inc(12)}>+12</button>
                
                <button className="btn" onClick={() => inc(20)}>+18</button>
            </div>
        </div>
    )
}

export default UseCallback
