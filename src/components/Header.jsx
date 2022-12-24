import { useNavigate } from "react-router-dom";
import { Button, Badge, Navbar, Container } from 'react-bootstrap';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FcFilm } from "react-icons/fc";
import '../styles/Header.scss'

const Header = (props) => {

    const navigate = useNavigate();
    const routeToShoppingCart = () => {
        const path = `shoppingcart`;
        navigate(path);
    }

    return (
        <>
            <Navbar bg="dark"  variant="dark" className="Header">
                <Container>   {/* className="logo" */}
                    <Navbar.Brand href="/">
                        BlockBuster
                    </Navbar.Brand>
                
                    <Button variant="primary" onClick={routeToShoppingCart}>
                <AiOutlineShoppingCart size={30} />
                <Badge bg="secondary">{props.countInCart} </Badge>
            </Button>

                </Container>
            </Navbar>
        </>
    );
}

export default Header;