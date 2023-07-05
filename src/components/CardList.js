import React from "react";
import Card from "./Card";

const CardList = (props) => {
    const {robots} = props;
    robots.forEach(element => {
        const myArray = element.name.split(" ");
        let name = '';
        name += myArray[0];
        name += " ";
        name += myArray[1][0] + ".";
        element.name = name;
    });

    const cardArray= robots.map((user,i)=>
        {
            return (<Card 
                key={i} 
                id={user.id} 
                name ={user.name} 
                email ={user.email}
                />)
        })
    return(
        <div>
            {cardArray}  
        </div>
    );
}

export default CardList;