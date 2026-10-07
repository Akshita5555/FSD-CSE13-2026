import { useState } from 'react'

function UseReactState() {

    const [counter,setCounter]=useState(0);
    

        function increaseValue(){
            setCounter(counter+5);
        }
        return(

        <div>
            <h2 style={{ color: 'green' }}>UseReactState</h2>
            <h1 style={{ color: 'red' }}>Counter:{counter}</h1>
            <button onClick={increaseValue}>Counter</button>
        </div>
    )
}

export default UseReactState