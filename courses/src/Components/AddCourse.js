import React, { useEffect, useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import axios from 'axios';
import base_url from '../API/BootApi';
import { toast } from 'react-toastify';

const AddCourse = () => {

    useEffect(() => {
        document.title = "Add Courses"
    }, [])

    const [course, setcourse] = useState({});

    //formHandler
    const handleForm = (e) => {
        console.log(course);
        postDataToServer(course);
        e.preventDefault();

    };

    // creating function posting data to server
    const postDataToServer = (data) => {
        axios.post(`${base_url}/courses`, data).then(
            (response) => {
                console.log(response);
                console.log("success");
                toast.success("Course added successfully")

            }, (error) => {
                console.error(error);
                console.log("error");
                toast.error("Somethng went wrong")

            }

        )
    };


    return (
        <div>
            <h1 className="text-center">Fill Course Details</h1>

            <Form onSubmit={handleForm}>
                <FormGroup className="mt-2">
                    <Label for="UserId">CourseId</Label>
                    <Input type="text" name="UserId" id="UserId" placeholder="CourseId" onChange={(e) => {
                        setcourse({ ...course, id: e.target.value })
                    }} required/>
                </FormGroup>
                <FormGroup>
                    <Label for="title">Course Title</Label>
                    <Input type="text" name="title" id="title" placeholder="Course Title" onChange={(e) => {
                        setcourse({ ...course, title: e.target.value })
                    }} required/>
                </FormGroup>

                <FormGroup>
                    <Label for="description">Course Description</Label>
                    <Input type="textarea" name="description" id="description" placeholder="Course Description" onChange={(e) => {
                        setcourse({ ...course, description: e.target.value })
                    }} required/>
                </FormGroup>

                <Container className="text-center">
                    <Button color="success mt-4" type="submit">Add Course</Button>{'    '}
                    <Button color="warning mt-4 ml-4" type="submit">Clear</Button>

                </Container>


            </Form>

        </div>
    );


}

export default AddCourse;
