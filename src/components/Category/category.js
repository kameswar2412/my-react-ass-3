import React from 'react';
const Category = (props) => {
    const {id,title}=props
    console.log(props)
    return ( 
        <div>
         <div id={id} className="m-1 p-1 category-link">
            <h6>{title}</h6>
        </div>
        </div>
        
     );
}
 
export default Category;