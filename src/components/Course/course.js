import React, {useEffect,useState} from 'react';
import axios from 'axios';
import './../../App.css'

const Course = (props) => {

const [course, setCourse] = useState([]);
const url="https://api.edyoda.com/v1/blog/post-detail/"
    useEffect(() => {
        axios
          .get(url + props.match.params.slug +"/")
          .then((res) => {
            setCourse(res.data);
          });
      },[]);

console.log(course)

            // setAuthor(res.data);
//  const {name,profilepicture,description}=course.author
// console.log(author)

const {id,large_image,title,content}=course

    return ( <div id={id} className="course-page">
             <div >
                    <img src={large_image} className="course-img-page" alt="big img" />
             </div>
             <div className="course-page-text-container">
             <div>
                 <h1> {title} </h1>
                 <div>
                     {/* <p>{name}<span>    </span></p> */}
                 </div>
             </div>
             <div>
                 <div>
                     {content}
                 </div>
             </div>
             <hr />
             <div className="row" >
                 <div className="col" style={{maxWidth:"150px"}} >
                     {/* <img src={profilepicture}  alt="" width="100%" /> */}
                 </div>
                 <div className="col">
                        {/* <p>{name}</p> */}

                     {/* <p>{description}</p> */}
                 </div>

             </div>
             <div>
             <div>

             </div>
             </div>
             </div>
    </div> );
}
 
export default Course;