import React from 'react';

const List = ({editItem ,removeItem ,list})=>{
 return(
      <>
     {list.map((Item)=>{
     const { id, title,price} = Item;
      return(
        <div className='grocery-item'>
             <p className='title'>{title}</p>
             <p className='title'>${price}</p>
      <button type='submit' onClick={()=>editItem(id)}>Edit Item</button>
      <button type='submit' onClick={()=>removeItem(id)}>remove Item</button>
      </div>);
      })}
      
      </>
    )
}

export default List;