import React from 'react';
import { ListGroup} from 'reactstrap';
import {Link} from "react-router-dom";

const Menus = () => {
    return (
        <div>
            <ListGroup>
                <Link className="list-group-item list-group-item-action" tag="Home" to="/">Home </Link>
                <Link className="list-group-item list-group-item-action" tag="a" to="/add-course">Add Courses </Link>
                <Link className="list-group-item list-group-item-action" tag="a" to="/view-course">View Courses</Link>
                <Link className="list-group-item list-group-item-action" tag="a" to="#!">About Us </Link>
                <Link className="list-group-item list-group-item-action" tag="a" to="#!">Contact </Link>
            </ListGroup>


        </div>
    )
}

export default Menus;
