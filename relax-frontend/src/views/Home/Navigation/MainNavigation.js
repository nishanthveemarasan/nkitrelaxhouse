import { Navbar, Container, Nav } from "react-bootstrap";
import classes from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { TheHeaderDropdown } from "src/containers";
const MainNavigation = (props) => {
  const mapStateToProps = (state) => {
    return {
      data: state.loginStore.loggedInData,
    };
  };
  const state = useSelector(mapStateToProps);
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand href="#home">RELAXHOUSE</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="me-auto">
              <NavLink
                to="/posts"
                className={classes.link}
                activeClassName={classes.active}
              >
                Posts
              </NavLink>
              <NavLink
                to="/products"
                className={classes.link}
                activeClassName={classes.active}
              >
                Products
              </NavLink>
              {!state.data.isDataReceived && (
                <NavLink
                  to="/login"
                  className={classes.link}
                  activeClassName={classes.active}
                >
                  login
                </NavLink>
              )}
              {state.data.isDataReceived && (
                <Nav.Link onClick={props.click} className={"my-auto"}>
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
