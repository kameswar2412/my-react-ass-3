import React, {useEffect,useState} from 'react';
import axios from 'axios';
import './../../App.css'

const Course = (props) => {

const [course, setCourse] = useState([]);
const [abcd,setAbcd]=useState([]);
const url="https://api.edyoda.com/v1/blog/post-detail/"
    useEffect(() => {
        axios
          .get(url + props.match.params.slug +"/")
          .then((res) => {
            setCourse(res.data);
            setAbcd(res.data.author);
          });
      },[ ]);


            

const {id,large_image,title,content,posted_on}=course
const {name,description,profilepicture}=abcd
// console.log(course)

    return ( <div id={id} className="course-page">
             <div >
                    <img src={large_image} className="course-img-page" alt="big img" />
             </div>
             <div className="course-page-text-container">
             <div>
                 <h1> {title} </h1>
                 <div className="d-flex flex-wrap" >
                     <p style={{color:"blue"}}>{name} </p>
                     <span className="publish-date"> | {posted_on}  </span>
                 </div>
             </div>
             <div>
                {content}
                    
             </div>
             <hr />
             <div className="row" >
                 <div className="col" style={{maxWidth:"150px"}} >
                     <img src={profilepicture} style={{borderRadius:"50%"}} alt="" width="100%" />
                 </div>
                 <div className="col">
                        <p style={{color:"skyblue"}}>{name}</p>

                     <p>{description}</p>
                 </div>

             </div>
            
             </div>
             
    </div>
     );
}
 
export default Course;