import React from "react";
import 'tachyons';
const Card = (props) => {
    const {name,email,id} = props;

    if (id === 0){
        console.log(id);
        return(
            <div className='tc bg-light-pink dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robots' src={require('./henry.jpg')} ></img>
                <div>
                    <h2>{name}</h2>
                    <p>{email}</p>
                </div>
            </div>
        );
    }
    else{
        return (
            <div className='tc bg-light-pink dib br3 pa3 ma2 grow bw2 shadow-5'>
                <img alt='robots' src={`https://robohash.org/${id}?size=300x300`}></img>
                <div>
                    <h2>{name}</h2>
                    <p>{email}</p>
                </div>
            </div>
        );
    }
}

export default Card;