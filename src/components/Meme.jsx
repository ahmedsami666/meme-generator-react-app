import React from "react";
import memesData from "../memesdata";

const Meme = () => {
    const [meme, setMeme] = React.useState({
        randomImage: memesData.data.memes[0].url
    })
    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    function getMemeImage(e) {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
        e.preventDefault()
    }
    
    return (
        <div className="meme">
            <h1>Generate your meme!</h1>
            <button 
                className="form--button"
                onClick={getMemeImage}
            >
                Get a new meme image 
            </button>
            <img src={meme.randomImage} className="memeImg" alt="meme-img"/>
        </div>
    )    
}



export default Meme