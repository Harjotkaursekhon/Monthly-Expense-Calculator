import React, { useState ,useEffect} from 'react';
import Chart from './chart';


const getLocal = () => {
    let chatdata = localStorage.getItem('chatdata');
    if (!chatdata){
      return [];
     } else
     return(chatdata = JSON.parse(localStorage.getItem('chatdata'))) 
  };

const ChartArray=({list})=>{
    const [totals, setTotal] = useState('');
    const[month,setmonth]= useState('');
    const [chatdata, setchatdata] = useState(getLocal());
    const [newitems,setitem] =useState('0');
    // Total of items 
  const submitTotal=(e)=>{
       e.preventDefault();
       if(month === ''){
        alert("Please enter value of month");
       }else{
    const total = list.reduce((currenttotal,current)=>{
      return(currenttotal + Math.round(current.price))
      },0)
      setTotal(total);
       if(total>0){
        const newchatdata = {value:total, label:month, id : new Date().getTime().toString()};
        setchatdata([...chatdata,newchatdata]);}
    }
  }
    const allTotal =(e)=>{
      e.preventDefault();
      const newitem = chatdata.map((data)=>{
         const {value,label} = data;
      return(<p>{label} total is ${value} </p>
        )}) 
      console.log(newitem)
      setitem(newitem);
      
    }
    const allClear =(e)=>{
      setchatdata([]);
      setTotal([]);
      setitem('');
    }
     
    useEffect(() => {
        localStorage.setItem('chatdata', JSON.stringify(chatdata));
      },[chatdata]);

      const monthname= ['',"January","February","March","April","May","June","July",
      "August","September","October","November","December"];

    return(
         <>
        <div className='chartarray'>
            <p>click on All total to see previous month total expenses</p>
            <label for="select">Month</label>
            <select className='select' value= {month} onChange={(e) => setmonth(e.target.value)}>
             {monthname.map((arrow)=>{
                return(
                 <option>{arrow}</option>
                   )
               })}
             </select>
             <button className="button" type='submit' onClick={submitTotal}>Total</button>
             <section className='btn-section'>
             <button className="button" type='submit' onClick={allTotal} >All Total</button>
              <button className="button"type='submit' onClick={allClear}> ClearAll</button>
              </section>
            <article className='article-chartarray'>
              <h4>Current total: ${totals}</h4>   
            <h4>Previous monthes total:{newitems}</h4>
            </article>
        </div>
        <div className='chart'>
          <p>Chat is here to compare expenses with last month</p>
    
        <Chart className="chart" chatdata={chatdata}/>
       </div>
        </>
        
    )
};
export default  ChartArray;