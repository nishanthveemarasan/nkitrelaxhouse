import { useState, useEffect } from "react";
import { CAlert, CCol, CRow } from "@coreui/react";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "../UI/CartItem";
import SCard from "../UI/card/SCard";
import classes from "./Shop.module.css";
import SButton from "../UI/SButton";
import SInputGroup from "../UI/Input/SInputGroup";
import Suggestion from "../UI/SearchBox/Suggestion";
import { clearSuggestion, getSuggestion } from "src/store/cart-slice";
const Shop = () => {
  const [colorCollapsed, setcolorCollapsed] = useState(true);
  const [materialsCollapsed, setMaterialsCollapsed] = useState(true);
  const [typeCollapsed, setTypeCollapsed] = useState(true);
  const [search, setSearch] = useState("");
  const mapStateToProps = (state) => {
    return {
      data: state.cartStore.storeData,
    };
  };
  const onSetCollapsedHandler = () => {
    setcolorCollapsed((prevState) => !prevState);
  };
  const onSetMaterialsCollapsedHandler = () => {
    setMaterialsCollapsed((prevState) => !prevState);
  };
  const dispatch = useDispatch();
  const onSearchHandler = (e) => {
    setSearch(e.target.value);
  };
  const onChangeSearchInputHandler = (data) => {
    setSearch(data);
    dispatch(clearSuggestion());
  };
  useEffect(() => {
    let debounce;
    if (search.trim()) {
      debounce = setTimeout(() => {
        dispatch(getSuggestion(search));
      }, 500);
    } else {
      dispatch(clearSuggestion());
    }

    return () => {
      clearTimeout(debounce);
    };
  }, [search]);

  const state = useSelector(mapStateToProps);
  return (
    <>
      <div className={classes.topBox}>
        <CAlert color="primary" closeButton>
          This is a primary alert — check it out!
        </CAlert>
      </div>
      <CRow className={classes.topRow}>
        <CCol sm={12} md={3}></CCol>
        <CCol sm={12} md={6}>
          <div className={`ml-1 mr-4 ${classes.searchBox}`}>
            <SInputGroup
              padding="2.5% 1%"
              placeholder="Search Product here"
              type="text"
              append={true}
              button={<SButton name="Search" color="primary" />}
              value={search}
              change={onSearchHandler}
            />
            <div className={classes.autoComBox}>
              <Suggestion changeHandler={onChangeSearchInputHandler} />
            </div>
          </div>
        </CCol>
        <CCol sm={12} md={3}></CCol>
      </CRow>

      <CRow>
        <CCol sm={12} md={12} lg={3}>
          <div className="ml-1 mr-4">
            <SCard
              heading="COLOR"
              collapsed={colorCollapsed}
              onCollapsedHandler={onSetCollapsedHandler}
              showCollapsed={true}
            >
              <p>Color</p>
              <p>Color</p>
              <p>Color</p>
              <p>Color</p>
            </SCard>
            <SCard
              heading="MATERIALS"
              collapsed={materialsCollapsed}
              onCollapsedHandler={onSetMaterialsCollapsedHandler}
              showCollapsed={true}
            >
              <p>Color</p>
              <p>Color</p>
              <p>Color</p>
              <p>Color</p>
            </SCard>
          </div>
        </CCol>
        <CCol sm={12} md={12} lg={9}>
          <CRow className="mr-2">
            {state.data.map((val, index) => {
              return (
                <CCol sm={12} md={4} lg={3} key={index}>
                  <CartItem item={val} />
                </CCol>
              );
            })}
          </CRow>
        </CCol>
      </CRow>
    </>
  );
};
export default Shop;
