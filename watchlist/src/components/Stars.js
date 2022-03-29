import {useState } from "react";
import Cookies from 'universal-cookie';

export const Stars = ({title, type}) => {



const cookies = new Cookies();
console.log(cookies.get(title));
const rating = parseInt(cookies.get(title));
const [count, setCount] = useState(rating ?? 1);

if(type !== "watched")
  return (<div></div>);

let ratingResult = <span className="rating__result"></span>;

const ratingStars = [];

for(let i = 0; i<5; i++){

  let newStar = <i className={"rating__star fa-star" + (i < count ? " fas" : " far")} onClick={() => {rate(i)}} key={i} ></i>;

  ratingStars.push(newStar);
}

function rate(i){
  if(count !== i+1){
    setCount(i+1);
    cookies.set(title, i+1, {path: '/'});
  }
    
}

return (
  <div className="rating">
          {ratingResult}
         {ratingStars}
      </div>
)
}