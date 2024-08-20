import {React} from "react";

import './index.css';

const Item=(props)=>{
    let {item} = props;
    console.log(item.name);
    return (<li className="item-container">
        <img className="image" src={item.img}/>
        <div className="item-details">
            <h4 className="model">{item.name}</h4>
            <p className="price">{item.price}</p>
        </div>
    </li>)
}

export default Item;