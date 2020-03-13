import React from 'react'
import ChildCategories from "./ChildCategories";
import './CarSearchCategories.scss'

const toggleCategories = (e) => {
  if (e.target.tagName !== 'SPAN') {
    return;
  }
  let childrenContainer = e.target.parentNode.querySelector('ul');
  if (!childrenContainer) return;
  childrenContainer.hidden = !childrenContainer.hidden;
};

const CarSearchCategories = props => {
  return (
    <div className='car-search-groups' onClick={toggleCategories}>
      <h2>{props.fullInfo.search_info.brand} {props.fullInfo.search_info.name}</h2>
      {props.fullInfo.list.map((item, key) =>
        <ul key={key}>
          <li>
            {Array.isArray(item.row) && <ChildCategories item={item.row} fullInfo={props.fullInfo}/>}
            <span>{item['@name']}</span>
          </li>
        </ul>
      )}
    </div>
  )
};

export default CarSearchCategories;