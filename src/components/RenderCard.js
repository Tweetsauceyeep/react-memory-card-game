import {useState} from 'react';

const RenderCard = ({data}) => {
  return (
    <div>
      {data.map(item => {
        return (
          <div key={item.key}>
            <div>{item.name}</div>
            <img src={item.image}></img>
          </div>
        );
      })}
    </div>
  );
};

export default RenderCard
