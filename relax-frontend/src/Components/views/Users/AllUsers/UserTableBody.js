import ActionButton from "src/Components/UI/ActionButton/ActionButton";
import { useDispatch } from "react-redux";
import classes from "./AllUsers.module.css";
import { CBadge } from "@coreui/react";
import { getUserModalData } from "src/store/user-slice";
const UserTableBody = (props) => {
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
            <td>{row.last_name}</td>
            <td>{row.username}</td>
            <td>{row.email}</td>
            <td>{row.job_title}</td>
            <td>{row.phone}</td>
            <td>{getRoles(row.roles)}</td>
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
      return <CBadge color="success">Admin</CBadge>;
    case "user":
      return <CBadge color="warning">User</CBadge>;

    default:
      return false;
  }
};
const getStatus = (value) => {
  switch (value) {
    case "1":
      return <CBadge color="success">Active</CBadge>;
    case "0":
      return <CBadge color="danger">Inactive</CBadge>;

    default:
      return false;
  }
};
