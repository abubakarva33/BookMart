import { NavLink } from "react-router-dom";
import "./Header.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../redux/features/UserSlice";

const Header = () => {
  const { isLogin } = useSelector((state) => state.user);
  const dispatch=useDispatch()
  return (
    <Navbar expand="lg" className="header">
      <Container fluid>
        <NavLink to="/">
          <img src="/images/logo.webp" alt="" className="logo" />
        </NavLink>
        <Navbar.Toggle aria-controls="navbarScroll" className="headerSide" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="" navbarScroll>
            <NavLink to="/books" className="navLink ms-4">
              {" "}
              All Books{" "}
            </NavLink>
            {isLogin ? (
              <button  className="navLink ms-4" onClick={dispatch(logout())}>
                Log out
              </button>
            ) : (
              <div>
                <NavLink to="/login" className="navLink ms-4">

                  Login
                </NavLink>
                <NavLink to="/register" className="navLink mx-4">
                  Register
                </NavLink>
              </div>
            )}
          </Nav>
          <Form className="d-flex">
            <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
            <Button variant="outline-success text-white">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
