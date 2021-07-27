import ActionButton from "src/Components/UI/ActionButton/ActionButton";
import { useDispatch } from "react-redux";
import classes from "./AllUsers.module.css";
import { getUserModalData } from "src/store/user-slice";
import ToolTip from "src/Components/UI/Tooltip/ToolTip";
import CBadge from "src/Components/UI/Badge/CBadge";
import { useHistory } from "react-router";
import { commentStoreAction, userStoreAction } from "src/store/store";
const UserTableBody = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const assignRoleHandler = (i) => {
    const data = {
      id: props.body[i].id,
      userRole: props.body[i].roles,
      userStatus: props.body[i].status,
      action: "assign",
    };
    dispatch(getUserModalData(data));
  };
  const disableUser = (i) => {
    const data = {
      id: props.body[i].id,
      userRole: props.body[i].status,
      userStatus: props.body[i].status,
      action: "delete",
    };
    dispatch(getUserModalData(data));
  };
  return (
    <>
      {props.body.map((row, i) => {
        return (
          <tr key={i}>
            <td>{row.id}</td>
            <td>{row.name}</td>
            <td>{row.email}</td>
            <td>{row.job_title}</td>
            <td>{row.phone}</td>
            <td>{getRoles(row.roles)}</td>
            <td>
              {getCount(
                row.id,
                row.posts_count,
                history,
                dispatch,
                "primary",
                "post"
              )}
            </td>
            <td>
              {getCount(
                row.id,
                row.comments_count,
                history,
                dispatch,
                "primary",
                "comment"
              )}
            </td>
            <td>{row.likes_count}</td>
            <td>{getStatus(row.status)}</td>
            <td>
              <ActionButton
                value="Assign Roles"
                class={classes.view}
                name="cil-align-center"
                action={() => assignRoleHandler(i)}
              />{" "}
              |{" "}
              <ActionButton
                value={row.status === "1" ? "Disable" : "Enable"}
                class={classes.delete}
                name="cil-trash"
                action={() => disableUser(i)}
              />
            </td>
          </tr>
        );
      })}
    </>
  );
};

export default UserTableBody;
const getRoles = (value) => {
  switch (value) {
    case "admin":
      return <CBadge color="success" value="Admin" size="100%" />;
    case "user":
      return <CBadge color="warning" value="User" size="100%" />;

    default:
      return false;
  }
};
const getStatus = (value) => {
  switch (value) {
    case "1":
      return <CBadge color="success" value="Active" size="100%" />;
    case "0":
      return <CBadge color="danger" value="Inactive" size="100%" />;

    default:
      return false;
  }
};

const getCount = (userId, value, history, dispatch, color, type) => {
  const onSubmitHandler = (history, userId, dispatch, type) => {
    if (type === "post") {
      dispatch(userStoreAction.updateUserId({ userId }));
      history.push("/admin/post-filter");
    } else if (type === "comment") {
      dispatch(commentStoreAction.updateFilterComment({ userId }));
      history.push("/admin/comment-filter");
    }
  };
  return (
    <ToolTip value="Click Here">
      <CBadge
        color={color}
        value={value}
        size="100%"
        click={onSubmitHandler.bind(null, history, userId, dispatch, type)}
      />
    </ToolTip>
  );
};
