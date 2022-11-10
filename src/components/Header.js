import React, { useState, useEffect } from "react";
// import { useNavigation } from "react-router";
import { Button } from 'reactstrap';
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
       <div className="Header">
           <div className="leftHeader">
                <img src={ logo } alt="The company logo."></img>
                <h4>LogeyBay</h4>

           </div>
           <Button className="cartButton" color="primary" cssModule={{btn: 'hyperspeed-btn'}} >
                {/* <img src={ cart } alt="A shopping cart."></img> */}
                { props.count }
           </Button>
       </div>
   );
}

// Header.propTypes = {
//     count: React.PropTypes.number.isRequired
// };