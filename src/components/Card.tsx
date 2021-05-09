import React from 'react'
import {Iprops} from './../Interfacses'

interface Props {
  item :Iprops
  toggle: boolean
}

const Card = ({item,toggle}:Props) => {

    console.log(item, "items");
    return (
      <div className={`${toggle ? 'card__toggle': 'card'}`}>
        {<img src={item.avatar} alt="no-img" className="card__img" />}
        <div className="card__details">
          <div  className={`${toggle ? 'card__content__toggle' : 'card__content'}`}>
            {` ${item.first_name}${item.last_name}`}
  
          </div>
        </div>
      </div>
    );
}

export default Card
