import React from "react";


export default function Card(props) {
    return (
        <div className="card">
            <img src={item.imgUrl}/>
            <h1 className="card--title">{item.title}</h1>
        </div>
    )
}