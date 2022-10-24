import React from "react";
import data from "../data";

export default function Card(props) {
    let checkLastCard 
    if (props.index === (data.length - 1)) {
        checkLastCard = "lastCard"
    } else checkLastCard = "card"

    return (
        <div className={checkLastCard}>
            <img className="card--img" src={`/public/images/${props.item.image}`}/>
            <div className="card--text">
                <div className="card--location">
                    <div className="card--country">
                        <img className="card--mapIcon" src="/public/images/map_icon.jpg"/>
                        <p>{props.item.location}</p>
                    </div>
                    <a className="card--mapsUrl" href={props.item.googleMapsUrl}>View on Google Maps</a>
                </div>
                <p className="card--title">{props.item.title}</p>
                <p className="card--dates">
                    <p>{props.item.startDate} - </p>
                    <p>{props.item.endDate}</p>
                </p>
                <p className="card--description">{props.item.description}</p>
            </div>
        </div>
    )
}