import {useState} from 'react';

const RenderCard = ({data, handleFunctionsClicks}) => {
  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      {data.map(item => {
        return (
          <div
            key={item.key}
            name={item.name}
            onClick={e => handleFunctionsClicks(e)}
            style={{
              // CSS Cringe
              height: '250px',
              width: '250px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              border: 'solid black 1px',
              margin: '2px',
              background: 'white',
            }}>
            <img
              alt={item.name}
              name={item.name}
              src={require(`../images/${item.image}`)}
              style={{
                height: '200px',
                width: '200px',
                textAlign: 'center',
              }}
              draggable="false"
            />
            <div name={item.name}>{item.name}</div>
          </div>
        );
      })}
    </div>
  );
};

export default RenderCard;
