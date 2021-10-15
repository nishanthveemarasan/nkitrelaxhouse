import React from "react";
import {
  CBadge,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CImg,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "src/store/login-store";
import { useHistory } from "react-router";
import {
  commentStoreAction,
  loginStoreAction,
  userStoreAction,
} from "src/store/store";
import img from "src/assets/img/profile.jpg";
const TheHeaderDropdown = () => {
  const history = useHistory();
  const mapStateToProps = (state) => {
    return {
      data: state.loginStore.loggedInData,
    };
  };
  const state = useSelector(mapStateToProps);
  const dispatch = useDispatch();
  const onLockoutHandler = () => {
    dispatch(logout());
  };

  const onChangeUserHandler = () => {
    history.push("/admin/user");
  };
  const onShowCommentHandler = () => {
    dispatch(
      commentStoreAction.updateFilterComment({
        userId: state.data.userId,
      })
    );
    history.push("/admin/comment-filter");
  };

  const onShowPostHandler = () => {
    dispatch(
      userStoreAction.updateUserId({
        userId: state.data.userId,
      })
    );
    history.push("/admin/post-filter");
  };

  const onShowLikestHandler = () => {
    history.push("/admin/post-likes");
  };
  return (
    <CDropdown inNav className="c-header-nav-items mx-2" direction="down">
      <CDropdownToggle className="c-header-nav-link" caret={false}>
        <div className="c-avatar">
          <CImg
            src={state.data.image ? state.data.image : img}
            className="c-avatar-img"
            alt="img"
          />
        </div>
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownItem header tag="div" color="light" className="text-center">
          <strong>Account</strong>
        </CDropdownItem>
        <CDropdownItem onClick={onShowLikestHandler}>
          <CIcon name="cil-envelope-open" className="mfe-2" />
          Likes
          <CBadge color="success" className="mfs-auto">
            {state.data.likes}
          </CBadge>
        </CDropdownItem>
        <CDropdownItem onClick={onShowPostHandler}>
          <CIcon name="cil-task" className="mfe-2" />
          Posts
          <CBadge color="danger" className="mfs-auto">
            {state.data.posts}
          </CBadge>
        </CDropdownItem>
        <CDropdownItem onClick={onShowCommentHandler}>
          <CIcon name="cil-comment-square" className="mfe-2" />
          Comments
          <CBadge color="warning" className="mfs-auto">
            {state.data.comments}
          </CBadge>
        </CDropdownItem>
        <CDropdownItem header tag="div" color="light" className="text-center">
          <strong>Settings</strong>
        </CDropdownItem>
        <CDropdownItem onClick={onChangeUserHandler}>
          <CIcon name="cil-user" className="mfe-2" />
          Profile
          {/* <CNavLink to="/admin/user">Profile</CNavLink> */}
        </CDropdownItem>
        <CDropdownItem onClick={onLockoutHandler}>
          <CIcon name="cil-lock-locked" className="mfe-2" />
          Lock Account
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  );
};

export default TheHeaderDropdown;
