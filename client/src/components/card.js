import React from 'react';
import  CardItem from "./cardItem.js"

const Cards= (props) => (
  <div className="cards">
   {props.cards.map((card) => <CardItem card={card} key={card.id} />)}
   </div>
)

export default Cards;
