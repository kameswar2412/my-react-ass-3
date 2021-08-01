import React from 'react';
import { Link } from 'react-router-dom';
const Card = (props) => {
  
    // console.log(props)

    const {id,small_image,title,posted_on,description,authorname,slug}=props
    return ( 
    <Link to={`/course/${slug}`}>
     <div className=" m-4 card" style={{width:" 300px", height:"400px"}} id={id}   >
      <div className="card-img">
     <img src={small_image} className="card-img-top" alt={id} />
      </div>
      <div className="p-4 card-text" >
      <h3 className="card-title">{title}</h3>

        <div className="d-flex flex-wrap">
        <p className="authorname">{authorname  }</p>
        <span className="publish-date"> {"  | " + (posted_on)}</span>
        </div>
        <div>
            <div className=" grid-text">
                {description} <span>...</span>
            </div>
        </div>
      </div>
      </div> 
     </Link>
     );
}
 
export default Card; 
