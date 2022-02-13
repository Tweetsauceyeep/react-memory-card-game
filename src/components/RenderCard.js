import {useState} from 'react';

const RenderCard = ({data, handleCardClick}) => {
  return (
    <div>
      {data.map(item => {
        return (
          <div key={item.key} onClick={handleCardClick} style={{display:"flex"}}>
            <img
              alt={`${item.name}`}
              src={require(`../images/${item.image}`)}
              style={{height:"100px", width:"100px", alignSelf:"center"}}
            />
            <div>{item.name}</div>
          </div>
        );
      })}
    </div>
  );
};

export default RenderCard;
