
import React from 'react';


const CardItem = (props) => (
  <div>
  <span>{props.card.name}</span>
  <br/>
  <span>{props.card.address}</span>
  <br/>
  <span>{props.card.phone}</span>
  <br/>
  <br/>
  </div>
)

export default CardItem;
