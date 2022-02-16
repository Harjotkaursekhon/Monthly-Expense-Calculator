import React,{ useState ,useEffect} from 'react';
import Form from './Form';
import List from './List';
import Alert from './Alert';
import ChartArray from './chartarray';
const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  
  if (!list ){
    return [];
  }else
   return (list = JSON.parse(localStorage.getItem('list')));
};

function App(){
  const[name,setName] =useState('');
  const[price,setPrice] = useState('');
  const[editing,setEditing] =useState(false);
  const[editID, setEditID] = useState(null);
  const[alert,setAlert] =useState({ show: false, msg: '', type: '' });
  const[list,setList]= useState(getLocalStorage());
  
  const sumbitHandler =(e)=>{
    e.preventDefault();

    if(name.trim() === '' || price.trim() === ''){
      
      //return(<p className='error-text'>fill data</p>);
      showAlert(true, 'danger', 'please enter value');
    }
    else if (editing) {
      setList(
        list.map((Item) => {
          if (Item.id === editID) {
            return { ...Item, title: name, price:price };
          }
          return Item;
        })
      );
      setName('');
      setPrice('');
      setEditID(null);
      setEditing(false);
    }
    else{
      const newItem = {id: new Date().getTime().toString(),title:name,price:price};
      setList([...list, newItem]);
      setName('');
      setPrice('');
    }
  }
 
  //edit Item
  const editItem =(id)=>{
     const specificItem = list.find((Item) => Item.id === id);
  setEditing(true);
  setEditID(id);
  setName(specificItem.title);
  setPrice(specificItem.price)
  }
  //remove item
  const removeItem =(id)=>{
    const removeItem = list.filter((Item) => Item.id !== id);
  setList(removeItem);
  }
 //alrt
 const showAlert = (show = false, type = '', msg = '') => {
  setAlert({ show, type, msg });
};
  // useeffect for set the value in local storage
  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  },[list]);
 
  //Component renders start
  return (
  <>
  
   <div className='container'>
     <div className='section-center'>
     <Form 
     sumbitHandler={sumbitHandler}
     setName ={setName}
     setPrice ={setPrice}
     name ={name}
     price ={price}
     />
     </div>
     {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
     <div className='grocery-container'>
     <List 
     editItem ={editItem}
     removeItem ={removeItem}
     list ={list}
     />
     </div>
     
     <ChartArray list ={list}/>  
     </div>
  
     
    </>
  );
};
export default App