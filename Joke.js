import React from "react"

function Joke(props) {
    return(
    <div className="container">
    <h3 className="question"> Question: {props.question} </h3>
    <h3> Answer: {props.answer} </h3>
    <img className="img" src={props.imgUrl} />
    </div>
    )
}
export default Joke