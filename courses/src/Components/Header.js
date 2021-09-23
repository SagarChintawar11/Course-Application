import React from 'react'
import {Card , CardBody} from 'reactstrap';



const Header = () => {
    return (
        <div className="text-center my-3">
            <Card>
                <CardBody className="text-center bg-warning">
                    <h1>Welcome to Courses</h1>
                </CardBody>
            </Card>
        </div>
    )
}

export default Header
