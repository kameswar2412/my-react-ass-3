import React from 'react';
const Card = (props) => {
    // console.log(props)
    const {id,small_image,title,posted_on,description,authorname}=props
    return ( 
    
  <div className=" m-4 card" style={{width:" 250px"}} id={id}   >
      <div className="card-img">
     <img src={small_image} className="card-img-top" alt={id} />
      </div>
      <div className="p-4 card-text" >
        <h3>{title}</h3>
        <p>{authorname  +"  |  "} <span> {posted_on}</span></p>
        <div>
            <div className=" grid-text">
                {description}
            </div>
        </div>
      </div>
  
</div> 
     );
}
 
export default Card; 
