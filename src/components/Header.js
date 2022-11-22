import React, { useState, useEffect } from "react";
// import { useNavigation } from "react-router";
import { Button, Container, Row, Col, Image, Badge } from 'react-bootstrap';
import '../styles/Header.scss'
import logo from './logo.png';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FcFilm } from "react-icons/fc";

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
           <div fluid className="Header">
            <div className="logo">
                <FcFilm size={ 70 }/>
                <h4 className="title">LogeyBuster</h4>
            </div>
                            
                    
                    <Button variant="primary" >
                        <AiOutlineShoppingCart size={ 30 }/>
                            {/* <Image fluid roundedCircle="true" src={ cart }></Image> */} <Badge bg="secondary">{ props.countInCart } </Badge>
                            </Button>
                    
            </div>
       </>
   );
}

// Header.propTypes = {
//     count: React.PropTypes.number.isRequired
// };