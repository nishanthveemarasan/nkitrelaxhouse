import React, { useEffect } from "react";
import { TheContent, TheSidebar, TheFooter, TheHeader } from "./index";
import { useSelector, useDispatch } from "react-redux";
import Loader from "src/Components/UI/Loader/Loader";
import { checkUser } from "src/store/login-store";
const TheLayout = (props) => {
  const mapStateToProps = (state) => {
    return {
      data: state.loginStore.loggedInData,
    };
  };
  const state = useSelector(mapStateToProps);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUser(props.history));
  }, [props.history, state.data.isDataReceived]);
  return (
    <>
      {!state.data.isDataReceived && <Loader />}
      {state.data.isDataReceived && (
        <div className="c-app c-default-layout">
          <TheSidebar />
          <div className="c-wrapper">
            <TheHeader history={props.history} />
            <div className="c-body">
              <TheContent />
            </div>
            <TheFooter />
          </div>
        </div>
      )}
    </>
  );
};

export default TheLayout;
