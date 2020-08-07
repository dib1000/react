import React from "react"
import Joke from "./Joke"

function App() {
    return (
        <div>
        <Joke 
        question="Why can’t you trust an atom?"
        answer="Because they make up everything!"
        imgUrl="https://cdn.mos.cms.futurecdn.net/MfCHE39YL5jaP9VVb2HeL6-970-80.jpg.webp"
        />
        <Joke 
        question="What did the duck say when he bought lipstick?"
        answer="Put it on my bill."
        imgUrl="https://i.pinimg.com/originals/98/68/c6/9868c6cbf76945517e6c7acff325af96.jpg"/>
        <Joke 
        question="What starts with E, ends with E, and has only one letter in it?"
        answer="An envelope!"
        imgUrl="https://media1.s-nbcnews.com/j/newscms/2019_26/1451579/seo_190619_letter_000_cover_50251ef86193bf6e465b56089e087d3d.fit-2000w.jpg"/>
        <Joke 
        question="What happens to a frog’s car when it breaks down?"
        answer="It gets toad away!"
        imgUrl="https://image-cdn.neatoshop.com/styleimg/16331/none/lightturquoise/default/266978-20;1588125395u.jpg"/>
        <Joke 
        question="Why did the fish blush?"
        answer="Because it saw the ocean’s bottom."
        imgUrl="http://www.nautilusmarinewholesale.com/images/P/Tetra_lonfin%20blushing%20white%20skirt.jpg"/>
        </div>
    )
}

export default App