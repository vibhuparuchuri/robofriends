import React from "react";

const Scroll = (props) => {
    return (
        <div style ={{'marginTop':'10px',overflowY:'scroll',border:'1px solid black',height:'800px'}}>
            {props.children}
        </div>
    );
}

export default Scroll;