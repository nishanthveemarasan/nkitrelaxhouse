import { Navbar, Nav } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import SButton from "../UI/SButton";
import CheckoutButton from "./CheckoutButton";
import classes from "./Navigation.module.css";
const Navigation = (props) => {
  const history = useHistory();
  let count;
  if (props.cartData.length > 0) {
    count = props.cartData.reduce((acc, el) => acc + el.count, 0);
  } else {
    count = 0;
  }

  const OnCheckoutPageHandler = () => {
    history.push("/cart");
  };

  return (
    <Navbar bg="dark" expand="lg" className="d-flex" fixed="top">
      <Navbar.Brand href="#">RELAXHOUSESTORE</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll" className="justify-content-end">
        <Nav
          className=" my-2 my-lg-0 "
          style={{ maxHeight: "100px" }}
          navbarScroll
        >
          <div className={classes.dropdown}>
            <CheckoutButton click={OnCheckoutPageHandler} count={count} />
            <div className={classes.dropdownContent}>
              {props.cartData.map((el, i) => {
                return (
                  <div key={i}>
                    <div className={classes.dropDownItem}>
                      <span>{el.itemname}</span>
                      <span className="mx-4">{`x${el.count}`}</span>
                      <span>{`$${el.totalPrice}`}</span>
                    </div>
                    <hr />
                  </div>
                );
              })}
              <div className={classes.dropdownCarBtn}>
                <SButton
                  name="Shopping Cart"
                  block={false}
                  color="dark"
                  click={OnCheckoutPageHandler}
                />
              </div>
            </div>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Navigation;
