// src/Quote.js
import React from "react";

const Travel = props => (
  <figure>
   <destination>{props.destination}</destination>

   <country>{props.country}</country>
   <photo><img
      src={props.photo}
      alt={props.destination}
    /></photo>
    <distance>{props.distance}</distance>
  </figure>
);

export default Travel;