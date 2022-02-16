import {React,useEffect,useState} from 'react';
import {links} from './data';


const Navbar=()=>{

return(
    <>
    <ul className='links' >
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                
                </li>
              );
            })}
          </ul>
    </>
);
};
export default Navbar;