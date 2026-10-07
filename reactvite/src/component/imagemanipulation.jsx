import { useState } from 'react'
import pic from '../img/scene.jpg'

function ImageManipulation() {
    const [catheight, setCatheight] = useState(200)
    const[red,setRed] =useState(0);
    const[green,setGreen] =useState(0);
    const[blue,setBlue] =useState(0);


    function enhanceHeight() {
        setCatheight(catheight + 10);
    }

    function changeColor() {
        setRed(Math.random() * 255);
        setGreen(Math.random() * 255);
        setBlue(Math.random() * 255);
    }    


    return (
        <div>
            <h1 style={{ color: 'red' }}>ImageManipulation</h1>
            <div style={{ backgroundColor: `rgb(${red}, ${green}, ${blue})`, border: '2px solid black', height: '400px', width: 'min(400px, 100%)', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>

                <img src={pic} height={catheight} width={200} alt="Scene" />
            </div>
            <button type="button" onClick={enhanceHeight}>Enhance Height</button>
            <button type="button" onClick={changeColor}>Change Color</button>
        </div>
    )
}

export default ImageManipulation
