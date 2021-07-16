import React from 'react'
import data from "./envelope.data"
import "./envelope.css"

const index = (props) => {
    return (
        <>
            {data.map(d=> 
                <div key={} className="chat"></div>
                
                )}
        </>
    )
}

export default index
