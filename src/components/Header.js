import React, { useState, useEffect } from "react";
// import { useNavigation } from "react-router";
import { Button, Container, Row, Col, Image, Badge } from 'react-bootstrap';
import '../styles/Header.scss'
import logo from './logo.png';
import cart from './cart.jpg';

export default function Header(props) {
    /*
        pass as props:
            title of page you are on
            count in shopping cart
        have button for shopping count that displays count in it

    */

    // function is called to navigate to shopping cart
    // when cart button clicked
    // const navigate = useNavigation();
    // const routeChange = () => {
    //     let path = './ShoppingCart';
    //     navigate(path);
    // }

    

   return (
       <>
           <Container fluid className="Header">
               <Row>
                            <Col sm={2}><Image src={ logo } alt="The company logo."></Image></Col>
                            <Col sm={8}><h4 className="title">LogeyBuster</h4></Col>
                            
                    <Col sm={2}>
                    <Button variant="primary" >
                            Go To Cart
                            {/* <Image fluid roundedCircle="true" src={ cart }></Image> */} <Badge bg="secondary">{ props.cartCount } </Badge>
                            </Button>
                    </Col>
                    </Row>
            </Container>
       </>
   );
}

// Header.propTypes = {
//     count: React.PropTypes.number.isRequired
// };