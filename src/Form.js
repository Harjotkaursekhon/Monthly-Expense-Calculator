import React from 'react';

const Form =({sumbitHandler,submitTotal,setName ,setPrice,name,price,totals})=>{
  
 return(
    <>
      <form  onSubmit={sumbitHandler}>
        <h2> Expense Calculator</h2>
       <div className='form-control'>
       <label className='label'>Name</label>
       <input  className ="inputbox"type = 'text' value= {name} onChange={(e) => setName(e.target.value)}></input>
       <label className='label'>Price</label>
        <input type = 'number'className="inputbox" value={price} onChange={(e) => setPrice(e.target.value)}></input>
       <button className="button" type='submit'>Submit</button> 
        </div>
     </form>
   </>
   );
};
export default Form