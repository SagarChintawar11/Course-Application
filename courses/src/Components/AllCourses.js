import React, { useState, useEffect } from 'react';
import Course from './Course';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import base_url from '../API/BootApi';
import axios from 'axios';
import { toast } from 'react-toastify';

const AllCourses = () => {

     

     useEffect(() => {
        document.title="All Courses";
     },[]);

     //function to call server...
     const getAllCoursesFromServer=()=>{
         axios.get(`${base_url}/courses`).then(
             (response)=>{

                 console.log(response);
                 toast.success("Courses has been loaded");
                 setCourses(response.data);
             
         },(error)=>{
             //for error
             console.log(error);
             toast.error("Something went wrong");

         }
         )
     };

     //calling the above function.. loding course function

     useEffect(() => {
        getAllCoursesFromServer();
     }, [])

    const [Courses, setCourses] = useState([
        // {

        //     title: "Java Course",
        //     description: "Java is the high-level, object-oriented, robust, secure programming language, platform-independent, high performance, Multithreaded, and portable programming language. It was developed by James Gosling in June 1991. It can also be known as the platform as it provides its own JRE and API"

        // },
        // {
        //     title: "Python Course",
        //     description: "Python was created by Guido van Rossum, and released in 1991.It is a general- purpose computer programming language.It is a high-level, object-oriented language which can run equally on different platforms such as Windows, Linux, UNIX, and Macintosh. Its high-level built-in data structures, combined with dynamic typing and dynamic binding. It is widely used in data science, machine learning and artificial intelligence domain. It is easy to learn and require less code to develop the applications"
        // },
        // {
        //     title:"Data Structure",
        //     description:"The data structure is a way that specifies how to organize and manipulate the data.It also defines the relationship between them.Some examples of Data Structures are arrays, Linked List, Stack, Queue, etc.Data Structures are the central part of many computer science algorithms as they enable the programmers to handle the data in an efficient way."
        // }
    ])

    const updateCourse=(id)=>{
        setCourses(Courses.filter((c)=>c.id !=id));
    }

  

    return (
        <div>

            <h2 className="text-center mt-2">All Courses</h2>
            {
                Courses.length > 0 ? Courses.map((item) => (<Course key={item.id} course={item} update={updateCourse}/>)) : "No Courses"

            }


        </div>
    )
}

export default AllCourses;
