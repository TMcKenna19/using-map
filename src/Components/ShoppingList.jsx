import React from "react";

const ShoppingList = (props) => {
    const groceriesList = ["Kimchi", "Miso", "Tofu", "Dashi", "Seaweed"];
    const homeItemList = ["Hammer", "Light bulb", "Tub Cleaner", "Lysol"];

    return(
        <>
        <h1>Shopping List:</h1>
        <h3>Grocery List:</h3>
        <ul>
            { groceriesList.map( (item, i) => 
            <li key={i}>{item}</li>
            )}
        </ul>

        <h3>Home Items:</h3>
        <ul>
            { homeItemList.map((item, i) =>
            <li key={i}>{item}</li>
            )}
        </ul>
        </>
    );


}




export default ShoppingList; 
