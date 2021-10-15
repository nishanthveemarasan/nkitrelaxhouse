import { useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import classes from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { TheHeaderDropdown } from "src/containers";
import { useHistory } from "react-router";
const MainNavigation = (props) => {
  const history = useHistory();
  const [token, setToken] = useState("");
  useEffect(() => {
    let loginToken = localStorage.getItem("token");
    setToken(loginToken);
  }, []);
  const onPageChangeHandler = (path) => {
    history.push(path);
  };
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand href="#home">MYSHOP ADMIN</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="me-auto">
              {/* <NavLink
                to="/posts"
                className={classes.link}
                activeClassName={classes.active}
              >
                Posts
              </NavLink> */}

              <Nav.Link
                onClick={() => onPageChangeHandler("/posts")}
                className={classes.link}
              >
                Posts
              </Nav.Link>
              <Nav.Link
                onClick={() => onPageChangeHandler("/products")}
                className={classes.link}
              >
                Products
              </Nav.Link>
              {!token && (
                // <NavLink
                //   to="/login"
                //   className={classes.link}
                //   activeClassName={classes.active}
                // >
                //   login
                // </NavLink>
                <Nav.Link
                  onClick={() => onPageChangeHandler("/login")}
                  className={classes.link}
                >
                  login
                </Nav.Link>
              )}
              {token && (
                <Nav.Link onClick={props.click} className={classes.link}>
                  Admin
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default MainNavigation;
