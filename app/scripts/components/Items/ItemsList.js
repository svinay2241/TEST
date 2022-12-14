import React from 'react'
import ItemRow from './ItemRow'

const mapItems = (item, index) => {
        return(<ItemRow item={item}/>)
}

const ItemsList = ({items}) =>{
    return(
    <div id="itemsList">
        {items.map(mapItems)}
    </div>)
}

export default ItemsList