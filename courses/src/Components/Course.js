import React from 'react';
import {
    Card, CardText, CardBody,
    CardTitle, Button, Container
} from 'reactstrap';
import axios from 'axios';
import base_url from '../API/BootApi';
import { toast } from 'react-toastify';

const Course = ({course, update}) => {

    const deleteCourse=(id)=>{
        axios.delete(`${base_url}/courses/${id}`).then(
            (response)=>{
                console.log(response);
                toast.success("Deleted Successfuly");
                update(id);

            }, (error)=>{
                console.log(error);
                toast.error("Something Went Wrong");

            }
        )

    }
    return (
        <div>
            <Card className="mt-2">
                {/* <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" /> */}
                <CardBody className="text-center">
                    <CardTitle tag="h5">{course.title}</CardTitle>
                    {/* <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle> */}
                    <CardText>{course.description}</CardText>
                    <Container className="text-center">
                        <Button color="warning">Update Course</Button>{'     '}
                        <Button color="danger" onClick={()=>{
                            deleteCourse(course.id);
                        }}>Delete Course</Button>
                    </Container>


                </CardBody>
            </Card>




        </div>
    )
}

export default Course
