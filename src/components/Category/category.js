import React from 'react';
// import { Link } from 'react-router-dom';
const Category = (props  ) => {
    const {id,title,slug,onSet}=props
    // console.log(props)
    const sendData=()=>{onSet(slug)}
    return ( 
        <div onClick={sendData}>
         <div id={id} className="m-1 p-1 category-link">
            <h6>{title}</h6>
        </div>
        </div>
        
     );
}
 
export default Category;