import React from 'react';
import './ListItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function ListItem(props) {
    const items = props.items;
    const listItems = items.map(item => {
        return <div className="list" key={item.key}>
            <p>
            <input type="text" 
            id={item.key} 
            value={item.text}
            onChange= {e=>  {
                    props.setUpdate(e.target.value, item.key)
                }} />
            <span>
                <FontAwesomeIcon 
                className="falcons" 
                icon="trash"
                onClick={() => props.deleteItems(item.key)}
                 />
            </span>
            </p>
        </div>
    })
    return( 
        <h1>{listItems}</h1>
    )
}

export default ListItem;