import React from 'react'
import {Iprops} from './../Interfacses'

interface Props {
  item :Iprops
}

const Card = ({item}:Props) => {

    console.log(item, "items");
    return (
      <div className="card">
        {<img src={item.avatar} alt="no-img" className="card__img" />}
        <div className="card__details">
          <div  className='card__content'>
            {` ${item.first_name}${item.last_name}`}
  
          </div>
        </div>
      </div>
    );
}

export default Card
