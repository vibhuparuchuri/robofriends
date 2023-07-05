import React from "react";


const SearchBox = ({searchField,searchChange})=>{
    return (
        <div className="tc">
            <input 
            className = "pa3 ba b--green bg-light-yellow" 
            type="search" 
            placeholder="search robots"
            //calling searchChange whenever search box changes
            onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;